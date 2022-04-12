<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			<msgList :item="item" :index="index"></msgList>
		</block>

	</view>
</template>

<script>
	import msgList from '@/components/msg/msgLIst.vue'
	export default {
		components: {
			msgList
		},
		data() {
			return {
				list: [{
					avatar: '/static/demo/topicpic/11.jpeg',
					userName: '陈伟铭',
					updateTime: '12',
					data: '测试测试',
					noread: 0
				},{
					avatar: '/static/demo/topicpic/11.jpeg',
					userName: '陈伟铭',
					updateTime: '12',
					data: '测试测试',
					noread: 20
				},{
					avatar: '/static/demo/topicpic/11.jpeg',
					userName: '陈伟铭',
					updateTime: '12',
					data: '测试测试',
					noread: 20
				},{
					avatar: '/static/demo/topicpic/11.jpeg',
					userName: '陈伟铭',
					updateTime: '12',
					data: '测试测试',
					noread: 20
				}]
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
