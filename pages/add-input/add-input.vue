<template>
	<view>
		<uni-nav-bar leftIcon="back" statusBar :border="false" @clickLeft="back">
			<view class="align-center flex justify-center w-100">
				所有人可见<text class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		<textarea v-model="content" class="px-2"></textarea>

		<uploadImage ref="uploadImage" :imageLists="imageLists" @choosePic="savePics"></uploadImage>

		<view class="flex align-center bg-white fixed-bottom" style="height: 85rpx;">
			<view class="iconfont icon-caidan button_flex animated " hover-class="jello"></view>
			<view class="iconfont icon-huati  button_flex animated" hover-class="jello"></view>
			<view class="iconfont icon-tupian  button_flex animated" hover-class="jello"
				@click="choosImage('uploadImage')"> </view>

			<view class="text-white mr-2 rounded bg-main ml-auto flex justify-center align-center"
				style="width: 140rpx; height: 60rpx;">发送</view>
		</view>
	</view>
</template>]


<script>
	import uploadImage from '@/components/uploadImage.vue'
	export default {
		components: {
			uploadImage
		},
		data() {
			return {
				content: "",
				imageLists: []
			}
		},
		onBackPress() {

		},
		onLoad() {
			uni.getStorage({
				key: 'uniinput',
				success: (res) => {
					const {
						content = "",
							imageLists = []
					} = JSON.parse(res.data)
					this.content = content
					this.imageLists = imageLists
				}
			})
		},
		methods: {
			choosImage(type) {
				switch (type) {
					case 'uploadImage':
						this.$refs.uploadImage.chooseImage()
						break;
					default:
						break;
				}
			},
			savePics(item) {
				this.imageLists = item
			},
			localSave(type) {
				let data = JSON.stringify({})
				if (type) {
					data = JSON.stringify({
						content: this.content,
						imageLists: this.imageLists
					})
				}
				uni.setStorage({
					key: 'uniinput',
					data: data
				})
			},
			back() {
				if (this.content !== "" || this.imageLists.length > 0) {
					uni.showModal({
						title: '是否保存草稿？',
						showCancel: true,
						cancelText: '不保存',
						confirmText: '保存',
						success: res => {
							if (res.confirm) {
								this.localSave(true)
							} else {
								this.localSave(false)
							}
							uni.navigateBack({
								delta: 1
							})
						},
					})
				}else{
					uni.navigateBack({
						delta: 1
					})
				}
			}
		}
	}
</script>

<style>
	.button_flex {
		width: 86rpx;
		height: 86rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
