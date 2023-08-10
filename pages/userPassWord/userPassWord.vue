<template>
	<view>
		<input type="text" class="uni-input" placeholder="请输入旧密码" v-model="oldpassWord" />
		<input type="text" class="uni-input" placeholder="请输入新密码" v-model="newpassWord" />
		<input type="text" class="uni-input" placeholder="请确认新密码" v-model="rellpassWord" />
		<view class="p-2">
			<button :disabled="disable" class="rounded bg-main" type="primary" @click="submit">确定</button>
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
		computed: {
			disable() {
				return this.oldpassWord === "" || this.newpassWord === "" || this.rellpassWord === ""
			}
		},
		methods: {
			check() {
				return this.newpassWord === this.rellpassWord
			},
			submit() {
				if (this.check()) {
					console.log(this.oldpassWord, this.newpassWord, this.rellpassWord)
				} else {
					uni.showToast({
						icon:"error",
						title: '两次新密码不一致',
						
					})
				}

			}
		}
	}
</script>

<style>

</style>
