<template>
	<view>
		<text class="iconfont icon-smile" style="font-size: 100rpx;"></text>
		<view class="animated " hover-class="pulse" style="padding: 20rpx; border: 1rpx solid #FF3333;">
			<text>123123</text>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="2000" :duration="200"
						:circular="true">
						<swiper-item v-for="(item,index) in list" :key="index">
							<image :src="item.image" :mode="aspectFit" class="swiper-image" mode="scaleToFill"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<uni-title :title1="title1" :title2="title2" :text1="text1" :text2="text2">
		</uni-title>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				title1: "陈伟铭",
				title2: "测试title2",
				text1: "文案1",
				text2: "文案2"

			}
		},
		methods: {

		},
		onLoad() {
			uni.request({
				url: 'https://www.fastmock.site/mock/b219b67e2b2ff234d48d81361e5c17f7/_api/image/photo', //仅为示例，并非真实接口地址。
				success: (res) => {
					console.log(res.data.data);
					this.list = res.data.data.list
				}
			});
		},
		methods: {
			// changeIndicatorDots(e) {
			// 	this.indicatorDots = !this.indicatorDots
			// },
			// changeAutoplay(e) {
			// 	this.autoplay = !this.autoplay
			// },
			// intervalChange(e) {
			// 	this.interval = e.target.value
			// },
			// durationChange(e) {
			// 	this.duration = e.target.value
			// }
		}
	}
</script>

<style>
	.swiper-image {
		width: 100%;
		height: 300upx;
	}
</style>
