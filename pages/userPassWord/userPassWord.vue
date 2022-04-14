<template>
	<view>
		<input type="text" class="uni-input" placeholder="请输入旧密码" v-model="oldpassWord" />
		<input type="text" class="uni-input" placeholder="请输入新密码" v-model="newpassWord" />
		<input type="text" class="uni-input" placeholder="请确认新密码" v-model="rellpassWord" />
		<view class="p-2">
			<button class="rounded bg-main" type="primary" @click="submit">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassWord: "",
				newpassWord: "",
				rellpassWord: ""
			}
		},
		methods: {
			submit() {
				console.log(this.oldpassWord,this.newpassWord,this.rellpassWord)
			}
		}
	}
</script>

<style>

</style>
