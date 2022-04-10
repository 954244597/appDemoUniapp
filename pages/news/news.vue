<template>
	<view>
		<uni-nav-bar :border="false" :statusBar="true" :fixed="true">
			<view class="flex justify-center align-center font-weight-bold w-100">

				<view class="font-md text-light-muted p-1" :class="checkIndex === index && 'font-lg text-main'"
					v-for="(item,index) in tabList" @click="clickIndex(index)">{{item.name}}</view>
			</view>
			<text slot="right" class="iconfont icon-fatie_icon" @click="goToEdit"></text>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkIndex: 0,
				tabList: [{
					name: '关注'
				}, {
					name: '话题'
				}]
			}
		},
		methods: {
			clickIndex(index){
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
