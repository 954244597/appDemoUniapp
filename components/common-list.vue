<template>
	<view style="padding: 20rpx;">
		<view style="display: flex;align-items: center;justify-content: space-between;">
			<view style="display: flex; align-items: center;">
				<image :src="item.userpic" style="width: 65rpx; margin-right: 20rpx; height: 65rpx; border-radius: 100%;" lazy-load=""
					@click="openSpacel">
				</image>
				<view>
					<view style="font-size: 30rpx;">{{item.username}}</view>
					<view style="color: #9D9589;">{{item.newTime}}</view>
				</view>
			</view>
			<view class="animated faster" hover-class="jello"
				style="padding: 10rpx;  height: 50rpx; border-radius: 5rpx; background-color: #FF4a6a; color: #FFFFFF;display: flex; justify-content: center;"
				@click="follow">
				{{item.ifFollow ? '取消关注':'关注'}}
			</view>
		</view>
		<view style="font-size: 30rpx; margin: 10rpx 0;" @click="openDetial">{{item.title}}</view>
		<image v-if="item.titlepoc" :src="item.titlepoc" style="height: 350rpx; width: 100%;" mode="widthFix"
			@click="openDetial"></image>
		<view style="display: flex; justify-content: center; padding-top:20rpx ;">
			<view style="flex:1;display: flex;justify-content:center" class="animated faster " hover-class="jello"
				@click="doSopport('support')" :class="item.support.type=== 'support' ? 'text-main' :''">
				<text class="iconfont icon-dianzan2" style="margin-right: 20rpx;"></text>
				<text>{{item.support.support_count}}</text>
			</view>
			<view style="flex:1;display: flex;justify-content: center; " class="animated faster" hover-class="jello"
				@click="doSopport('unSupport')" :class="item.support.type=== 'unSupport' ? 'text-main' :''">
				<text class="iconfont icon-cai" style="margin-right: 20rpx;"></text>
				<text>{{item.support.un_support_count}}</text>
			</view>
			<view style="flex:1;display: flex;justify-content: center; " class="animated faster" hover-class="jello"
				@click="openDetial()">
				<text class="iconfont icon-pinglun2" style="margin-right: 20rpx;"></text>
				<text>{{item.comment_count}}</text>
			</view>
			<view style="flex:1;display: flex;justify-content: center; " class="animated faster" hover-class="jello"
				@click="openDetial()">
				<text class="iconfont icon-zhuanfa1" style="margin-right: 20rpx;"></text>
				<text>{{item.share_count}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			openSpacel() {
				console.log('个人空间')
			},
			follow() {
				console.log('关注')
				this.$emit('follow', this.index)
			},
			openDetial() {
				console.log('打开详情页')
			},
			doSopport(type) {
				this.$emit('doSopport',type ,this.index)
				console.log('点赞')
			}
		}
	}
</script>

<style>
</style>
