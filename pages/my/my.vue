<template>
	<view>

		<view class="flex align-center p-2 bg-light">
			<view>
				<image style="width: 100rpx;height: 100rpx;" class="rounded-circle mr-2 " src="/static/demo/demo66.jpg">
				</image>
			</view>
			<view class="flex-1">
				<view class="font-weight-bold font-md">1234457777</view>
				<view>
					<text>总贴子：</text>
					<text>今日发帖：</text>
				</view>
			</view>
			<view>
				<view class="iconfont icon-jinru"></view>
			</view>
		</view>

		<view class="flex align-center px-3 py-2">
			<view v-for="(item,index) in list" class="flex flex-column align-center justify-center flex-1" :key="index">
				<view class="font-weight-bold font-lg">{{item.name}}</view>
				<view class="font text-muted">{{item.num}}</view>
			</view>
		</view>

		<view class="p-2">
			<image src="../../static/demo/banner1.jpg" mode="widthFix" style="height: 170rpx; width: 100%;"
				class="rounded"></image>
		</view>

		<uni-list>
			<uni-list-item title="浏览历史">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
			<uni-list-item title="社区认证">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
			<uni-list-item title="审核帖子">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '帖子',
					num: 12
				}, {
					name: '动态',
					num: 12
				}, {
					name: '评论',
					num: 12
				}, {
					name: '粉丝',
					num: 12
				}]
			}
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../useSet/useSet'
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
