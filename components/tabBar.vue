<template>

	<scroll-view scroll-x class="scroll-row" :scroll-into-view="scorlInfo" scroll-with-animation>
		<view v-for="(item,index) in topBar" :key="index " class="scroll-row-item px-5 py-2"
			:class="index === activity ? 'text-main  font-weight-bold'  : '' " :id="'tab'+index"
			@click="clickTabBar(index)" >
			{{item.name}}
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			topBar: Array,
			activity: Number,
			scorlInfo: String
		},
		methods: {
			clickTabBar(index) {
				this.$emit('clickTabBar', index)
			}
		}
	}
</script>

<style>
</style>
