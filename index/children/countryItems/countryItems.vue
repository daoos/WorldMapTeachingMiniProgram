<template>
	<view class="content">
		<view style="width: 100%;display: flex;">
			<button class="btn" hover-class="button-hover" style="background-color: #009f5d;" @click="showDialog('气候')">气候</button>
			<button class="btn" hover-class="button-hover" style="background-color: #019fa0;" @click="showDialog('人口分布')">人口分布</button>
		</view>
		<view style="width: 100%;display: flex;">
			<button class="btn" hover-class="button-hover" style="background-color: #887ddd;" @click="showDialog('经纬度')">经纬度</button>
			<button class="btn" hover-class="button-hover" style="background-color: #cd7bdd;" @click="showDialog('语言')">语言</button>
		</view>
		<view style="width: 100%;display: flex;">
			<button class="btn" hover-class="button-hover" style="background-color: #ff5675;" @click="showDialog('典型动物')">典型动物</button>
			<button class="btn" hover-class="button-hover" style="background-color: #ff8345;" @click="showDialog('地形分布')">地形分布</button>
		</view>
		<view style="width: 100%;display: flex;">
			<button class="btn" hover-class="button-hover" style="background-color: #8cc540;" @click="showDialog('时区')">时区</button>
			<button class="btn" hover-class="button-hover" style="background-color: #019fde;" @click="showDialog('降水分布')">降水分布</button>
		</view>
		<view style="width: 100%;display: flex;">
			<button class="btn" hover-class="button-hover" style="background-color: #ff1244;" @click="showDialog('环境污染')">环境污染</button>
			<button class="btn" hover-class="button-hover" style="background-color: #019fa0;" @click="showDialog('著名景点')">著名景点</button>
		</view>
	</view>
</template>

<script>
	export default {
	name: 'countryItems',
	props: {
		countryName: {
			type: String,
			default: ''
		}
	},
	methods:{
		showDialog(item) {
			if (this.ifMarkCountry(this.countryName)==true) {
				this.$emit('showDialog',item)
			}
			else {
				//展示提示框
				uni.showToast({
					title: '更多信息完善中',
					icon: 'none',
					duration: 2000
				});
			}
		},
		//查看是否是重点国家
		ifMarkCountry(item){
			return ["中国(China)","美国(United States)","英国(United Kingdom)","澳大利亚(Australia)","巴西(Brazil)","德国(Germany)"].includes(item)
		}
	}
}
</script>

<style>
	.btn{
		width: 300rpx;
		padding: 10rpx;
		margin: 20rpx;
		border-radius: 20rpx;
		color: white;
		/* 更加立体一些 */
		box-shadow: 0 0 10rpx rgba(0,0,0,0.5);
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>