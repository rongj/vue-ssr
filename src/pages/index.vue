<template>
	<div class="phone-wrap">
		<ul class="news-list">
			<li v-for="(item, index) in dataList">
				<router-link :to="`/detail/${item.articletp}/${item.articleid}`">{{item.title}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>

	export default {
		asyncData ({ store, route }) {
			// 触发 action 后，会返回 Promise
			return store.dispatch('fetchList', {
				subjectId: '51460441',
				pageSize: 40,
			})
		},

		computed: {
			// 从 store 的 state 对象中的获取 item
			dataList () {
				return this.$store.state.list
			}
		},
	}

</script>

<style lang="scss">
	.news-list {
		padding: 0 0.28rem;
		li {
			font-size: 0.28rem;
			line-height: 0.4rem;
			margin: 0.2rem 0;
		}
	}
</style>

