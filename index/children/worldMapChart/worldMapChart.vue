<template>
	<view>
		<uni-icons style="margin-left: 90vw;" type="images" size=30 @click="showMapImage"></uni-icons>
		<view class="wrap">
			<mpvue-echarts ref="echarts" id="main" :echarts="echarts" @onInit="renderMap" @click="clearLocation" />
		</view>
	</view>
</template>

<script>
	import * as echarts from 'echarts/echarts.min.js'; /*echarts.min.js为在线定制*/
	import * as worldJson from '../../../echarts/map/json/world.json'; /*echart.min.js为在线定制*/
	import mpvueEcharts from 'mpvue-echarts';
	import {getCountryNameByEnglish,ifNameIsCountry,findCityByName} from './data/worldCountryName.js'
	//引入图表的option
	import {chartOptions} from './data/chartOptions.js';
	export default {
		name:'worldMapChart',
		components:{
			mpvueEcharts,
		},
		//接收父组件的值
		props:{
			chooseLocation:String,
			default:"",
		},
		//监听chooseLocation的变化
		watch: {
			chooseLocation(newVal, oldVal) {
				console.log("Map 得到的显示val"+newVal)
				setTimeout(function(){
					uni.showLoading({
						title:'请稍后',
					})
				},500)
				setTimeout(function () {
					uni.hideLoading();
				}, 1500);
				this.refreshMapOptions(newVal)
			},
		},
		data() {
			return {
				chart: {},
				echarts,
				options:chartOptions,
				//定时器
				timer:{},
			}
		},
		onLoad() {
			
		},
		onReady() {

		},
		methods: {
			//重设地图options
			refreshMapOptions(locationName){
				this.options.title.text = locationName;
				let color = 'red'
				clearInterval(this.timer)
				if(ifNameIsCountry(locationName.match(/\(([^)]*)\)/)[1])==true){
					//定时执行
					this.timer = setInterval(()=>{
						//修改options中的geo的region内容
						let regions = [{
							name: locationName.match(/\(([^)]*)\)/)[1],
							itemStyle: {
								areaColor: 'yellow',
								borderColor:color,
								borderWidth:2
							}
						}];
						color = (color =='red'?'yellow':'red');
						this.options.series[0].data = [];
						this.options.geo.regions = regions;
						//配置图表
						this.chart.setOption(this.options);
						this.$refs.echarts.setChart(this.chart);
					},1000)
					
				}
				else {
					this.timer = setInterval(()=>{
						let cityInfo = findCityByName(locationName.match(/\(([^)]*)\)/)[1]);
						//设置region
						let regions = [{
							name: cityInfo[1],
							itemStyle: {
								areaColor: 'yellow',
								borderColor:color,
								borderWidth:2
							}
						}];
						//设置city亮灯
						let seriesData = [
							{
								name:cityInfo[0][0],
								value:[cityInfo[0][1],cityInfo[0][2],cityInfo[0][3]]
							}
						]
						color = (color =='red'?'yellow':'red')
						this.options.geo.regions = regions;
						this.options.series[0].data = seriesData;
						//配置图表
						this.chart.setOption(this.options);
						this.$refs.echarts.setChart(this.chart);
					},1000)
				}
			},
			//将canvas转为图片
			showMapImage(){
				clearInterval(this.timer)
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(()=>{
					this.$refs.echarts.canvasToTempFilePath();
				},1000)
			},
			//绘制地图
			renderMap(e) {
				let {
					canvas,
					width,
					height
				} = e;
				width = width - 20;
				echarts.setCanvasCreator(() => canvas);
				this.chart = echarts.init(canvas, null, {
					width: width,
					height: height
				})
				echarts.registerMap('world', worldJson);
				canvas.setChart(this.chart)
				//初始化echarts实例
				this.chart.setOption(this.options);
				this.$refs.echarts.setChart(this.chart);
				//表格绑定点击事件
				this.chart.on('click',function(e){
					uni.$emit("chooseLocation", {
						country:getCountryNameByEnglish(e.name),
						emitPlace:"clickMap"
					});
				})
			},
			recoverMapChart(country){
				//用户清空国家栏
				if(country == ""){
					clearInterval(this.timer)
					this.options.title.text = "暂未选择"
					console.log(country)
					this.options.series[0].data = [];
					this.options.geo.regions = [];
					console.log(this.options)
					//配置图表
					this.chart.setOption(this.options);
					this.$refs.echarts.setChart(this.chart);
				}
				//用户只清除城市栏
				else{
					console.log(this.chooseLocation)
					this.refreshMapOptions(this.chooseLocation)
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		width: 100%;
		height: 600rpx;
	}
</style>