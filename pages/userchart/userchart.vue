<template>
	<view>
		<scroll-view scroll-y="true" :style="'height:' + srollH +'px'">
			<view class="flex align-start px-2 ">
				<image class="rounded-circle" style="width: 100rpx; height: 100rpx;" src="/static/demo/demo66.jpg">
				</image>
				<view class="bg-light p-2 mx-2" style="max-width: 400rpx; min-width: 100rpx;">111</view>
			</view>
			
			<view class="flex  px-2" style="flex-direction: row-reverse;">
				<image class="rounded-circle" style="width: 100rpx; height: 100rpx;" src="/static/demo/demo66.jpg">
				</image>
				<view class="bg-light p-2 mx-2" style="max-width: 400rpx; min-width: 100rpx;">111</view>
			</view>
		</scroll-view>
		
		
		
		
		<view class="fixed-bottom border-top flex align-center bg-white " style="height: 100rpx;">
			<input class="flex-1 bg-light rounded mr-2" style="padding: 10rpx 0;" />
			<view class="iconfont  icon-fabu flex justify-center align-center font-md animated " style="width: 100rpx;"
				hover-class="jello text-main"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				srollH: 500
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.srollH = res.windowHeight - uni.upx2px(101)
				}
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
