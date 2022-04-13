<template>

	<view>
		<view class="flex p-2" @click="click">
			<image style="width: 80rpx;height: 80rpx;" class="rounded-circle mr-2" src="/static/demo/topicpic/11.jpeg">
			</image>
			<view class="flex flex-column flex-1">
				<view class="flex justify-between ">
					<text class="font-md">{{listItem.userName}}</text>
					<text class="font text-secondary">{{listItem.updateTime}}</text>
				</view>
				<view class="flex justify-between align-center">
					<text style="max-width: 500rpx;" class="font text-secondary text-ellipsis">{{listItem.data}}</text>
					<uni-badge :text="listItem.noread"></uni-badge>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {}
			},
			index: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				listItem: {}
			}
		},
		methods:{
			click(){
				uni.navigateTo({
					url: '../../pages/userchart/userchart',
				});
			}
		},
		mounted() {
			this.listItem = this.item
		},
	}
</script>

<style>
</style>
