<template>
	<view>
		<tabBar @clickTabBar="clickTabBar" :topBar="topBar" :activity="activity" :scorlInfo="scorlInfo"
			style="height:100rpx;" />
		<swiper disable-programmatic-animation :current="activity" @change="swipterOnchange"
			:style="'height:'+listHeight+'px;'">
			<swiper-item v-for="(item,index) in topBar">
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
		</swiper>

	</view>
</template>

<script>
	import commonList from "@/components/common-list.vue"
	import tabBar from "@/components/tabBar.vue"

	export default {
		components: {
			commonList,
			tabBar
		},
		data() {
			return {
				loadMore: '下拉获取更多~',
				listHeight: 100,
				scorlInfo: '',
				activity: 0,
				topBar: [{
					name: '娱乐'
				}, {
					name: '但是'
				}, {
					name: '成都'
				}, {
					name: '我的'
				}, {
					name: '从现在'
				}, {
					name: '方法'
				}, {
					name: '22'
				}, {
					name: '包v'
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

		// onLoad() {

		// },
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.listHeight = res.windowHeight - uni.upx2px(100)
					console.log(res.windowHeight)
					console.log(this.listHeight)
				}
			})
		},
		mounted() {
			// uni.request({
			//     url: 'https://www.fastmock.site/mock/b219b67e2b2ff234d48d81361e5c17f7/_api/image/photo', //仅为示例，并非真实接口地址。
			//     success: (res) => {
			//         console.log(res.data.data);
			// 		this.list = res.data.data.list
			//         // this.text = 'request success';
			//     }
			// });
		},
		methods: {
			loadmor() {
				setTimeout(() => {
					this.loadMore == "加载更多~~~~"
					this.list = [...this.list, ...this.list]
					console.log('加载更多~~~~')
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
				// console.log(111133)
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
			}
		}
	}
</script>

<style>

</style>
