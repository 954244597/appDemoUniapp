<template>
	<view>
		<uni-list>
			<uni-list-item clickable title="账号安全" @click="open('password')">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="资料编辑">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="清除缓存">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="意见反馈">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
			<uni-list-item clickable title="关于社区">
				<template v-slot:footer>
					<view class="iconfont icon-jinru"></view>
				</template>
			</uni-list-item>
		</uni-list>

		<view class="p-2">
			<button class="rounded bg-main" type="primary">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			open(type) {
				console.log(type)
				let url = ""
				switch (type) {
					case 'password':
						url = "../userPassWord/userPassWord"

				};

				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style>

</style>
