<template>
	<view>
		<template v-if="searlist.length === 0">
			<view class="py-2 px-2">搜索历史</view>
			<view class="flex rounded  font  flex-wrap">
				<view class="border  rubberBand mx-2 my-1 p-1" v-for="(i,index) in searchHistoryList" :key="index">
					{{`cs${i}`}}
				</view>
			</view>
		</template>


		<block v-else v-for="(item,index)  in searlist" :key="index">
			<commonList :item="item" :index="index"></commonList>
		</block>

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
				searchText: '',
				searchHistoryList: ["cs1", "2", "3", "4", "5", "6", "7", "8", ],
				searlist: [],
				type: ""
			}
		},
		onLoad(e) {
			this.type = e.type;
			// console.log(this)
			// #ifdef APP-PLUS  
			console.log(12323)
			// let currentWebView = this.$mp.page.$getAppWebview();
			// let tn = currentWebView.getStyle().titleNView;
			// tn.searchInput.placeholder = '搜索' + 11111
			// currentWebView.setStyle({
			// 	titleNView: tn
			// })
			// const currentWebview = this.$scope.$getAppWebview();
			// console.log(currentWebview)
		},
		methods: {
			search() {
				uni.hideKeyboard()
				this.searchHistoryList = [...this.searchHistoryList, this.searchText]

				this.searlist = [{
					username: "陈伟铭测试",
					userpic: '/static/default.jpg',
					newTime: '2022年3月27号',
					ifFollow: false,
					title: '陈伟铭测试标题',
					titlepoc: '/static/demo/datapic/12.jpg',
					support: {
						type: 'support',
						support_count: 1,
						un_support_count: 2,
					},
					comment_count: 3,
					share_count: 4
				}]
			}
		},
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
			if (this.searchText.length === 0) {
				this.searlist = []
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.search()
			}
		},
		onReady() {

		}
	}
</script>

<style>

</style>
