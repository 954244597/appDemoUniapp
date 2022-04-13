<template>
	<view>
		<view class="flex p-2">
			<view v-for="(item,index) in tabNames" class=" flex-1 flex  align-center justify-center "
				:class="check === index && 'font-weight-bold font-lg text-main'" @click="checkTab(index)">{{item.name}}
				<uni-badge :text="item.num"></uni-badge>
			</view>
		</view>

		<swiper disable-programmatic-animation :current="check" :style="'height:'+listHeight+'px;'">
			<swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+listHeight+'px;'" @scrolltolower="loadmor">
					<divider></divider>
					<block v-for="(item,index) in userList" :key="index">
						<userL :item="item" :index="index" @listCheck="listCheck"></userL>
						<divider></divider>
					</block>
					<view class="flex align-center justify-center py-3">
						<text class="font text-light-muted">{{loadMore}}</text>
					</view>
				</scroll-view>
			</swiper-item>

			<!-- <swiper-item>
				<scroll-view scroll-y="true" :style="'height:'+listHeight+'px;'" @scrolltolower="loadmor">
					<hotList :hotList="hotList"></hotList>
					<view class="p-2">
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
				</scroll-view>
			</swiper-item> -->
		</swiper>

	</view>
</template>

<script>
	import userL from '@/components/user/userList.vue'
	export default {
		components: {
			userL
		},
		data() {
			return {
				check: 0,
				loadMore: '加载中',
				listHeight: 300,
				userList: [{
						avatar: '/static/default.jpg',
						username: '1',
						sex: 1,
						age: 24,
						isFollow: true
					},
					{
						avatar: '/static/default.jpg',
						username: '2',
						sex: 2,
						age: 24,
						isFollow: false
					},
					{
						avatar: '/static/default.jpg',
						username: '3',
						sex: 1,
						age: 26,
						isFollow: true
					}
				],
				tabNames: [{
					name: '互关',
					num: 200
				}, {
					name: '关注',
					num: 200
				}, {
					name: '粉丝',
					num: 200
				}],
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.listHeight = res.windowHeight - res.statusBarHeight - 52
				}
			})
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search?type=user'
			})
		},
		onNavigationBarButtonTap(e) {
			console.log(e)
			uni.navigateBack({
				delta: 1
			});
		},
		methods: {
			listCheck(index) {
					this.userList[index].isFollow = !this.userList[index].isFollow
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
			checkTab(index) {
				this.check = index
			}
		}
	}
</script>

<style>

</style>
