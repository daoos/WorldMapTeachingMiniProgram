<template>
	<view>
		<image class="bg" :src="backgroundImage"></image>
		<view style="display: flex;justify-content: space-between;margin-left: 3%;">
			<text style="font-size: xx-large;color: beige;font-weight: bold;">世界地图册</text>
			<button size="mini" style="align-self: center;" type="primary" @click="switchTo('/pages/worldRecords/worldRecords')">切换世界之最</button>
		</view>
		<!-- 顶部搜索框和按钮 -->
		<view style="display: flex;justify-content: space-around;align-items: center;">
			<view>
				<view z-index="99" style="display: flex;width:100%;justify-content:center;margin:auto;align-items: center;">
					<text style="margin-right: 2vw; color:beige;font-size: small;width:fit-content">国家搜索</text>
					<uni-combox @ifShowSelector="ifShowCanvasCountryCondition"  :candidates="candidates" placeholder="请输入要查找的国家" v-model="searchCountry"></uni-combox>
				</view>
				<view z-index="99" style="display: flex;width:100%;justify-content:center;margin:auto;align-items: center;margin-top: 2vh;">
					<text style="margin-right: 2vw;color:beige;font-size: small;">城市搜索</text>
					<uni-combox @ifShowSelector="ifShowCanvasCityCondition"  :candidates="cities" placeholder="请输入要查找的城市" v-model="searchCity"></uni-combox>
				</view>
			</view>
			<view>
				<button size="mini" style="background-color: bisque;" hover-class="button-hover" @click="goto('/pages/chooseCountry/chooseCountry')">国家</button>
			</view>
		</view>
		<view style="width: 100%;height: 700rpx;">
			<worldMapChartVue ref="mapChart" v-show="ifShowCanvasChart" :chooseLocation="userChooseLoacation"></worldMapChartVue>
		</view>
		<view style="display: flex;justify-content:space-around;">
			<text>您当前选择的是</text>
			<text style="font-size: x-large;color: red;">{{countryName}}</text>
		</view>
		<view class="content">
			<country-items :countryName="countryName" @showDialog='showTheDialog'></country-items>
		</view>
		
		
		<!-- 遮罩透明层 -->
		<!--mask-->  
		<cover-view class="drawer_screen" @click="showTheDialog" v-if="showDialog"></cover-view>  
		<!--content-->
		<cover-view class="drawer_box" v-if="showDialog"> 
		  <!--drawer content-->  
		  <cover-view class="drawer_content">  
			<!-- 填充内容 -->
			<item-dialog ref="dialog" :title="title" :countryName = "countryName"></item-dialog>
		  </cover-view>  
		</cover-view>
	</view>
</template>

<script>
	import worldMapChartVue from './children/worldMapChart/worldMapChart.vue';
	import countryItems from './children/countryItems/countryItems.vue';
	import itemDialog from './children/itemDialog/itemDialog.vue';
	import {images} from './data.js'
	//引入bgImage
	import { getWorldCountryNameList,getCountryNameByEnglish,ifNameIsCountry,findCityByName,getCountryCities } from './children/worldMapChart/data/worldCountryName.js';
	export default {
		components:{
            worldMapChartVue,
			countryItems,
			itemDialog
        },
		computed:{
			ifShowCanvasChart(){
				return !this.ifShowCityCombox && !this.ifShowCountryCombox
			}
		},
		//监听变化
		watch: {
			searchCountry(newVal, oldVal) {
				//更新城市数组
				if(newVal == ""){
					this.countryName = "暂未选择"
					this.cities = getCountryCities('')
					this.searchCity = ""
					this.userChooseLoacation = ""
					this.recoverMapChart("")
				}		
				else if (getCountryCities('').includes(this.searchCity)) {
					//如果是选择了城市造成的国家变化,不处理
					if (oldVal == '') {
						return;
					}
					else {
						let items = getWorldCountryNameList();
						if(items.includes(newVal)) {
							this.userChooseLoacation = newVal;
							this.cities = getCountryCities(newVal.match(/\(([^)]*)\)/)[1])
							this.searchCity = ''
						}
					}
				}
				else {
					let items = getWorldCountryNameList();
					if(items.includes(newVal)) {
						this.userChooseLoacation = newVal;
						this.cities = getCountryCities(newVal.match(/\(([^)]*)\)/)[1])
						this.searchCity = ''
					}
				}
			},
			userChooseLoacation(newVal,oldVal){
				if(ifNameIsCountry(newVal.match(/\(([^)]*)\)/)[1])==true){
					this.countryName = newVal
				}
				//根据英文名找到国家名字
				else {
					this.searchCountry = getCountryNameByEnglish(findCityByName(newVal.match(/\(([^)]*)\)/)[1])[1])
					this.countryName = this.searchCountry
				}
			},
			searchCity(newVal,oldVal){
				//取消选择城市
				if(newVal == ""){
					if(this.searchCountry==""){
						return
					}
					else{
						this.userChooseLoacation = this.searchCountry
						this.recoverMapChart(this.searchCountry)
					}
				}
				let items = getCountryCities('')
				if (items.includes(newVal)) {
					this.userChooseLoacation = newVal;
				}
			},
			showDialog(newVal,oldVal){
				if(newVal==false){
					this.$ref.dialog.stopSpeech();
				}
			}
		},
		data() {
			return {
				
				//用户要搜索的国家
				searchCountry:'',
				//候选国家
				candidates: getWorldCountryNameList(),
				//用户选择的地点
				userChooseLoacation:'',
				//用户点击的item
				title:'',
				showDialog:false,
				//用户的选择的国家地的名字
				countryName:"暂未选择",
				//是否展示canvas
				ifShowCountryCombox:false,
				ifShowCityCombox:false,
				backgroundImage:images.bgImage,
				//dialog要展示的内容
				dialogContent: '',
				cities:getCountryCities(''),
				searchCity:''
			}
		},
		onLoad() {
			uni.$on('chooseLocation',(data)=>{
				//查看是否弹窗
				if(this.ifMarkCountry(data.country,data.emitPlace)){
					uni.$emit('showDialog', {
						item:""
					}) 
				}
				//是国旗选择过来的
				if(data.emitPlace=="chooseCountry"){
					setTimeout(function(){
						uni.showLoading({
							title:'请稍后',
						})
					},500)
					setTimeout(function () {
						uni.hideLoading();
					}, 1500);
					this.$refs.mapChart.refreshMapOptions(data.country)
					this.searchCity = "";
					this.userChooseLoacation = data.country;
					this.searchCountry = data.country;
				}
				//用户点击图表
				else{
					//不弹窗就修改
					if(!this.ifMarkCountry(data.country,data.emitPlace)){
						this.userChooseLoacation = data.country;
						this.searchCountry = data.country;
					}
				}
				
			});
			uni.$on('showDialog',(data)=>{
				this.showDialog = true;
				this.title = data.item; 
			}) 
		},
		onUnload() {
			this.searchCountry = "";
			this.userChooseLoacation = "";
			this.recoverMapChart("")
		},
		//监听
		methods: {
			recoverMapChart(country){
				this.$refs.mapChart.recoverMapChart(country);
			},
			//跳转页面
			goto(url) {
				uni.navigateTo({
					url:url
				})
			},
			//进入页面
			switchTo(url){
				uni.reLaunch({
					url:url
				})
			},
			//弹窗遮罩
			showTheDialog(item) {
				// console.log(this.bgImage)
				this.title = item
				this.showDialog = !this.showDialog
				if(this.showDialog==false){
					this.$refs.dialog.stopSpeech();
					this.$refs.dialog.innerAudioContext = "";
				}
				else{
					this.$refs.dialog.innerAudioContext= uni.createInnerAudioContext()
				}
				
			},  
			//canvas显示与否
			ifShowCanvasCityCondition(ifShowSelect){
				console.log(ifShowSelect)
				this.ifShowCityCombox = ifShowSelect
			},
			ifShowCanvasCountryCondition(ifShowSelect){
				this.ifShowCountryCombox = ifShowSelect
			},
			//查看是否是重点国家
			ifMarkCountry(countryName,emitPlace) {
				console.log(countryName)
				console.log(emitPlace)
				let country = countryName.match(/\(([^)]*)\)/)[1]
				//查看用户点击的是否是6个重点国家
				if(
					(country=="China"||
					country=="United Kingdom"||
					country=="Germany"||
					country=="Australia"||
					country=="United States"||
					country=="Brazil"
				)&&
				this.searchCity==""?countryName==this.userChooseLoacation:countryName==this.searchCountry
				&&"clickMap"==emitPlace){
					return true
				}
				else{
					return false
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/*mask*/  
	.drawer_screen {  
		width: 100%;  
		height: 100%;  
		position: fixed;  
		top: 0;  
		left: 0;  
		z-index: 1000;  
		background: #000;  
		opacity: 0.5;  
		overflow: hidden;  
	}  
	
	/*content*/  
	.drawer_box {  
		width: 90%;  
		overflow: hidden;  
		position: fixed;
		height: 70vh;
		bottom: 5vh;
		left: 0;  
		z-index: 1001;  
		background: #FAFAFA;  
		margin-left: 5vw;
		border-radius: 20px;  
	}  
	
	.drawer_content {  
		height: 65vh;  
		overflow-y: scroll; /*超出父盒子高度可滚动*/  
	}  
	
	.bg{
		
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		opacity: 0.5;
	}
</style>
