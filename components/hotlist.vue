<template>
	<view>
		<view class="flex align-center justify-between px-2">
			<text class="font-md">热门分类</text>
			<view @click="open">
				<text class="font text-secondary">更多</text>
				<text class="iconfont icon-gengduo"></text>
			</view>
		</view>
		<view class="flex align-center flex-wrap my-2 border-bottom ">
			<view v-for="(item,index) in hotLists" hover-class="jello" :key="index"
				class="animated  border rounded bg-light px-2 py-1 mx-2 my-1" @click="topicClick(item)">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "hotlist",
		props: {
			hotList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				hotLists: []
			};
		},
		mounted() {
			this.hotLists = this.hotList
		},
		methods: {
			topicClick(item) {

			},
			open() {
				console.log(111)
				uni.navigateTo({
					url: '/pages/topicMore/topicMore',
				});
			}
		}
	}
</script>

<style>

</style>
