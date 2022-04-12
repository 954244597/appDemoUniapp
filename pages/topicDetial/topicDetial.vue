<template>
	<view>
		<view style="position: relative;">
			<image src="/static/demo/topicpic/1.jpeg" mode="aspectFill" style="height: 300rpx;" class="w-100 filter">
			</image>
		</view>
		<TopicInfo :topicInfo="detial"></TopicInfo>
		<view class=" p-2 flex align-center border-bottom" v-for="(item,index) in 2" :key="index"
			hover-class="bg-light">
			<text class="iconfont icon-xihuan text-main"></text>
			<text class="text-dark font  text-ellipsis">[新人必读]测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</text>
		</view>
		<divider></divider>

		<view class="flex p-2">
			<view v-for="(item,index) in tabNames" class=" flex-1 flex  align-center justify-center "
				:class="check === index && 'font-weight-bold font-lg text-main'" @click="checkTab(index)">{{item.name}}
			</view>
		</view>

		<block v-for="(item, index) in listData" :key="index">
			<commonList :item="item" :index="index" />
			<divider></divider>
		</block>


	</view>
</template>

<script>
	import TopicInfo from '@/components/topicDetial/topicInfo.vue'
	import CommonList from '@/components/common-list.vue'
	export default {
		components: {
			TopicInfo,
			CommonList
		},
		data() {
			return {
				detial: {},
				tabNames: [{
					name: '默认'
				}, {
					name: '最新'
				}],
				check: 0,
				list1: [{
						username: "陈伟铭测试1",
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
					},
					{
						username: "陈伟铭测试",
						userpic: '/static/default.jpg',
						newTime: '2022年3月27号',
						ifFollow: false,
						title: '陈伟铭测试标题',
						titlepoc: '',
						support: {
							type: 'unSupport',
							support_count: 1,
							un_support_count: 2,
						},
						comment_count: 3,
						share_count: 4
					},
					{
						username: "陈伟铭测试",
						userpic: '/static/default.jpg',
						newTime: '2022年3月27号',
						ifFollow: false,
						title: '陈伟铭测试标题',
						titlepoc: '/static/demo/datapic/12.jpg',
						support: {
							type: '',
							support_count: 1,
							un_support_count: 2,
						},
						comment_count: 3,
						share_count: 4
					},
					{
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
					}
				],
				list2: [{
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
					},
					{
						username: "陈伟铭测试",
						userpic: '/static/default.jpg',
						newTime: '2022年3月27号',
						ifFollow: false,
						title: '陈伟铭测试标题',
						titlepoc: '',
						support: {
							type: 'unSupport',
							support_count: 1,
							un_support_count: 2,
						},
						comment_count: 3,
						share_count: 4
					},
					{
						username: "陈伟铭测试",
						userpic: '/static/default.jpg',
						newTime: '2022年3月27号',
						ifFollow: false,
						title: '陈伟铭测试标题',
						titlepoc: '/static/demo/datapic/12.jpg',
						support: {
							type: '',
							support_count: 1,
							un_support_count: 2,
						},
						comment_count: 3,
						share_count: 4
					},
					{
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
					}
				]
			}
		},
		computed: {
			listData() {
				return this[`list${this.check+1}`]
			}
		},
		onReachBottom() {
			setTimeout(() => {
				this[`list${this.check+1}`].push({
					username: "陈伟铭新增",
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
				})

			}, 1000)

		},
		onLoad(e) {
			this.detial = e.detialSource && JSON.parse(e.detialSource)
		},
		methods: {
			checkTab(index) {
				this.check = index
			}
		}
	}
</script>

<style>
	.filter {
		filter: blur(10px);
	}
</style>
