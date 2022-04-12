<template>
	<view>
		<view style="position: relative; z-index: 999;" class="px-2">
			<view class="flex bg-white">
				<image :src="detial.cover" class="mr-2 rounded"
					style="width: 150rpx; height: 150rpx; margin-top: -75rpx; ">
				</image>
				<text class="text-secondary">{{detial.title}}</text>
			</view>
			<view class="text-secondary flex align-center font mt-1">
				<text class="mr-2">话题：{{detial.news_count}}</text>
				<text>今日：{{detial.today_count}}</text>
			</view>
			<view class="text-secondary flex font-md mb-2">
				{{detial.desc}}
			</view>
		</view>
		<divider></divider>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detial: {}
			}
		},
		props: {
			topicInfo: {
				default: {},
				type: Object
			}
		},
		mounted() {
			this.detial = this.topicInfo
		},
		methods: {

		}
	}
</script>

<style>
</style>
