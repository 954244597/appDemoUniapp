<template>
	<view>
		<uni-nav-bar :border="false" :statusBar="true" :fixed="true">
			<view class="flex justify-center align-center font-weight-bold w-100">
				<view class="font-md text-light-muted p-1" :class="checkIndex === index && 'font-lg text-main'"
					v-for="(item,index) in tabList" @click="clickIndex(index)">{{item.name}}</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon" @click="goToEdit"></text>
		</uni-nav-bar>

		<swiper disable-programmatic-animation :current="checkIndex" @change="swipterOnchange"
			:style="'height:'+listHeight+'px;'">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+listHeight+'px;'" @scrolltolower="loadmor">
					<divider></divider>
					<block v-for="(item,index) in list" :key="index">
						<commonList :item="item" :index="index" @follow="follow" @doSopport="doSopport" />
						<divider></divider>
					</block>
					<view class="flex align-center justify-center py-3">
						<text class="font text-light-muted">{{loadMore}}</text>
					</view>
				</scroll-view>
			</swiper-item>

			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+listHeight+'px;'" @scrolltolower="loadmor">
					<hotList :hotList="hotList"></hotList>
					<view class="p-2" @click="search">
						<view class="flex align-center justify-center bg-light rounded py-2 text-secondary">
							<text class="iconfont icon-sousuo mr-2"></text>搜索话题
						</view>
					</view>

					<swiper class="px-2 pb-2" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="200">
						<swiper-item v-for="(item,index) in 3" :key="index">
							<image :src="'/static/demo/banner'+(index+1)+'.jpg'" class="w-100  rounded"
								style="height: 300rpx;"></image>
						</swiper-item>
					</swiper>

					<divider></divider>
					<view class="font-md p-2">最近更新</view>
					<topicList :topicList="topicList"></topicList>
					<!-- <view>huati</view>
					<view>huati</view> 
					<view>huati</view> -->
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import commonList from "@/components/common-list.vue"
	import hotList from '@/components/hotlist.vue'
	import topicList from '@/components/topicList.vue'
	export default {
		data() {
			return {
				listHeight: 500,
				checkIndex: 0,
				activity: 0,
				tabList: [{
					name: '关注'
				}, {
					name: '话题'
				}],
				hotList: [{
					name: '军事'
				}, {
					name: '话题'
				}, {
					name: '热搜'
				}, {
					name: '话题'
				}, {
					name: '话题'
				}],
				loadMore: '下拉获取更多~',
				topicList: [{
					cover: '/static/demo/userpic/11.jpg',
					title: '话题名称',
					desc: '话题描述',
					today_count: 0,
					news_count: 10
				}, {
					cover: '/static/demo/userpic/11.jpg',
					title: '话题名称',
					desc: '话题描述',
					today_count: 0,
					news_count: 10
				}, {
					cover: '/static/demo/userpic/11.jpg',
					title: '话题名称',
					desc: '话题描述',
					today_count: 0,
					news_count: 10
				}, {
					cover: '/static/demo/userpic/11.jpg',
					title: '话题名称',
					desc: '话题描述',
					today_count: 0,
					news_count: 10
				}],
				list: [{
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
		components: {
			commonList,
			hotList,
			topicList
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.listHeight = res.windowHeight - res.statusBarHeight - 44
				}
			})
		},
		methods: {
			search() {
				uni.navigateTo({
					url: '../search/search?type=topic'
				})
			},
			loadmor() {
				if (this.loadMore === "加载中~~~~") {
					return
				}
				this.loadMore = "加载中~~~~"

				setTimeout(() => {
					this.loadMore = "下拉加载更多"
					this.list = [...this.list, ...this.list]
					console.log('222')
				}, 2000)
			},
			swipterOnchange(current, source) {
				if (current.detail.source === "touch") {
					this.clickTabBar(current.detail.current)
				} else {
					return
				}

			},
			clickTabBar(index) {
				this.activity = index
				this.scorlInfo = 'tab' + index
				this.checkIndex = index
			},
			doSopport(type, index) {
				console.log(type)
				if (this.list[index].support.type === "") {
					if (type === "support") {
						this.list[index].support.type = type
						this.list[index].support.support_count++
					} else {
						this.list[index].support.type = type
						this.list[index].support.un_support_count++
					}
					return
				}

				if (this.list[index].support.type === "support" && type === "unSupport") {
					this.list[index].support.type = type
					this.list[index].support.un_support_count++
					this.list[index].support.support_count--

				} else if (this.list[index].support.type === "unSupport" && type === "support") {
					this.list[index].support.type = type
					this.list[index].support.un_support_count--
					this.list[index].support.support_count++
				}


			},
			follow(index) {
				console.log(1);
				this.list[index].ifFollow = !this.list[index].ifFollow
				uni.showToast({
					title: this.list[index].ifFollow ? '关注成功' : '取消关注'
				})
			},
			clickIndex(index) {
				this.checkIndex = index
			},
			goToEdit() {
				uni.navigateTo({
					url: '../add-input/add-input'
				})
			}
		}
	}
</script>

<style>

</style>
