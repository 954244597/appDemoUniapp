<template>
	<view>
		<uni-list>
			<uni-list-item clickable title="头像" @click="upload">
				<template v-slot:footer>
					<image class="rounded-circle" style="width: 70rpx;height: 70rpx;" :src="defaultImage"></image>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="昵称">
				<template v-slot:footer>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="性别" @click="changeSex">
				<template v-slot:footer>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="生日">
				<template v-slot:footer>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="情感">
				<template v-slot:footer>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="职业">
				<template v-slot:footer>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="家乡">
				<template v-slot:footer>
					<view class="iconfont icon-bianji"></view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultImage: "../../static/demo/topicpic/11.jpeg"
			}
		},
		methods: {
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						this.defaultImage = res.tempFilePaths[0]
						// console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			changeSex() {
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			}
		}
	}
</script>

<style>
	/deep/ .uni-list-item__container {
		align-items: center;

	}
</style>
