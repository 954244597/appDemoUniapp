<template>
	<view>
		<commonList :isdetial="true" :item="defaultItem" @doShare="doShare">
			<view>
				<image mode="widthFix" class="w-100" src="/static/bgimg/1.jpg"></image>
			</view>
		</commonList>

		<divider></divider>


		<view class="uni-comment">
			<view class="uni-comment-list">
				<view class="uni-comment-face">
					<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
				</view>
				<view class="uni-comment-body">
					<view class="uni-comment-top">
						<text>网友</text>
					</view>
					<view class="uni-comment-date">
						<text>08/10 08:12</text>
					</view>
					<view class="uni-comment-content">很酷的HBuilderX和uni-app，开发一次既能生成小程序，又能生成App</view>
				</view>
			</view>
		</view>

		<uni-popup style="z-index: 997;" ref="popup" type="bottom">
			<view class="bg-white">
				<view class="text-center border-bottom font p-2">分享到</view>
				<view class="flex align-center p-2">
					<view class="flex-1 flex justify-center align-center flex-column">
						<view
							class="font-lg iconfont icon-QQ bg-primary text-white flex justify-center align-center rounded-circle"
							style="width: 100rpx;height: 100rpx;"></view>
						<text>qq</text>
					</view>
					<view class="flex-1 flex justify-center align-center flex-column">
						<view
							class="iconfont icon-weixin uni-bg-green text-white font-lg flex justify-center align-center rounded-circle"
							style="width: 100rpx;height: 100rpx;"></view>
						<text>微信</text>
					</view>
					<view class="flex-1 flex justify-center align-center flex-column">
						<view
							class="iconfont uni-icon-weibo uni-bg-red text-white font-lg flex justify-center align-center rounded-circle"
							style="width: 100rpx;height: 100rpx;"></view>
						<text>微博</text>
					</view>
				</view>
				<view class="text-center border-top font p-2">取消</view>
			</view>

		</uni-popup>
		<view style="height: 100rpx;"></view>

		<view class="fixed-bottom border-top flex align-center bg-white " style="height: 100rpx;">
			<input class="flex-1 bg-light rounded mx-2" style="padding: 10rpx 0;" />
			<view class="iconfont  icon-fabu flex justify-center align-center font-md animated " style="width: 100rpx;"
				hover-class="jello text-main"></view>
		</view>
	</view>
</template>

<script>
	import commonList from '@/components/common-list.vue'
	export default {
		components: {
			commonList
		},
		data() {
			return {
				defaultItem: {},
				providerList: []
			}
		},
		onLoad(e) {
			this.init(e)
		},
		onReady() {
			uni.getProvider({
				service: 'share',
				success: (e) => {
					console.log('success', e);
					let data = []
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin',
									sort: 0
								})
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline',
									sort: 1
								})
								break;
							case 'sinaweibo':
								data.push({
									name: '分享到新浪微博',
									id: 'sinaweibo',
									sort: 2
								})
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq',
									sort: 3
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data.sort((x, y) => {
						return x.sort - y.sort
					});
					console.log(this.providerList, "====>>>")
				},
				fail: (e) => {
					console.log('获取分享通道失败', e);
					uni.showModal({
						content: '获取分享通道失败',
						showCancel: false
					})
				}
			});
		},

		methods: {
			doShare() {
				this.$refs.popup.open('bottom')
			},
			init(e) {
				this.defaultItem = JSON.parse(e.detial)
				uni.setNavigationBarTitle({
					title: "陈伟铭测试"
				})
			}
		}
	}
</script>

<style>

</style>
