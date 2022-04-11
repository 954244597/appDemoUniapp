<template>

	<view>
		<view class=" flex p-2" v-for="(item,index) in topicList">
			<image :src="item.cover" class="rounded mr-2" style="width: 150rpx; height: 150rpx; ">
			</image>
			<view class="flex flex-column flex-1 justify-between">
				<text class="font-md text-dark">{{item.title}}</text>
				<text class="text-secondary font">{{item.desc}}</text>
				<view class="flex align-center text-secondary font">
					<text class="mr-2">动态：{{item.today_count}}</text>
					<text>今日：{{item.news_count}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "topicList",
		props: {
			topicList: {
				default: [],
				type: Array
			}
		},
		data() {
			return {

			};
		},
		mounted() {
			this.topicLists = this.topicList
		}
	}
</script>

<style>

</style>
