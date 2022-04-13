<template>
	<view class="flex align-center p-2 " >
		<image :src="item.avatar" style="width: 100rpx;height: 100rpx;" class="rounded-circle mr-2"></image>
		<view class=" flex flex-column flex-1">
			<text class="font-md">{{item.username}}</text>
			<view>
				<uni-badge type="error" size="small"><text class="iconfont mr-1"
						:class="item.sex ===1 ? 'icon-nan':'icon-nv'"></text>
				</uni-badge>
				<text>{{item.age}}</text>
			</view>
		</view>
		<view @click.stop="check">
			<text class="uni-icon" :class="item.isFollow  ? 'uni-icon-checkbox':'uni-icon-checkbox-filled'"></text>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			item: {
				default: {},
				type: Object
			},
			index: {
				default: 0,
				type: Number
			}
		},
		data() {
			return {

			}
		},
		methods: {
			check() {
				this.$emit('listCheck', this.index)
			}
		}
	}
</script>

<style>
</style>
