<template>
	<view class="box">
		<view class="bo1">
			<text>{{title1}}</text>
			<text>{{title2}}</text>

		</view>
		<view class="bo2">
			<text>{{text1}}</text>
			<text>{{text2}}</text>
		</view>
	</view>

</template>

<script>
	export default {
		name: "uni-title",
		props: {
			title1: String,
			title2: String,
			text1: String,
			text2: String
		},
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.box {
		text-align: center;
		
	}

	.bo1 {
		color: #4CD964;
		font-size: 24px;
		line-height: 60px;
	}

	.bo2 {
		color: #2C405A;
		font-size: 18px;
	}
</style>
