<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<msgList :item="item" :index="index"></msgList>
		</block>
		<uni-popup ref="popup" type="top" background-color="#fff">
			<view class="">
				<view class="flex align-center justify-center  border-bottom" hover-class="bg-light"
					@click="popop('search')">
					<text class="iconfont icon-sousuo text-secondary p-2">请输入搜索内容</text>
				</view>
				<view class="flex align-center justify-center" hover-class="bg-light" @click="popop('clear')">
					<text class="iconfont icon-qingchu p-2">清空消息列表</text>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import msgList from '@/components/msg/msgLIst.vue'
	const list = [{
		avatar: '/static/demo/topicpic/11.jpeg',
		userName: '陈伟铭',
		updateTime: '12',
		data: '测试测试',
		noread: 0
	}, {
		avatar: '/static/demo/topicpic/11.jpeg',
		userName: '陈伟铭',
		updateTime: '12',
		data: '测试测试',
		noread: 20
	}, {
		avatar: '/static/demo/topicpic/11.jpeg',
		userName: '陈伟铭',
		updateTime: '12',
		data: '测试测试',
		noread: 20
	}, {
		avatar: '/static/demo/topicpic/11.jpeg',
		userName: '陈伟铭',
		updateTime: '12',
		data: '测试测试',
		noread: 20
	}]
	export default {
		components: {
			msgList
		},
		data() {
			return {
				list: list
			}
		},
		onPullDownRefresh() {
			this.refresh()
		},
		onNavigationBarButtonTap(e) {
			switch (e.float) {
				case 'left':
					this.$refs.popup.close()
					uni.navigateTo({
						url: '../userlist/userlist'
					})
					break;
				case 'right':
					this.open()
					break;
			}

		},
		methods: {
			popop(type) {
				switch (type) {
					case 'search':
						break;
					case 'clear':
						this.list = []
						break;
					default:
						break;
				}
				this.$refs.popup.close()
			},
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('top')
			},
			refresh() {
				setTimeout(() => {
					this.list = list
					uni.stopPullDownRefresh()
				}, 2000)

			}
		}
	}
</script>

<style>

</style>
