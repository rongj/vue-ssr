<template>
	<div>
		<div class="phone-header clearfix">
			<router-link class="top-back" to="/"></router-link>
			<h2 class="top-title">{{article.mainplate}}</h2>
		</div>
		<div class="phone-body mop-detail-wrap">
			<div class="wrap-detail">
				<h2 class="post-title">{{article.title}}</h2>
				<div class="postman clearfix">
					<a class="postman-avator" href="">
					<img :src="`//i1.mopimg.cn/head/${article.userid}/80x80`">
				</a>
					<a class="postman-info" href="">
						<div class="postman-identity">
							<h2>{{article.username}}</h2>
							<span class="lz">楼主</span>
						</div>
						<div class="post-time">
							<span>{{article.publishtime}}</span>
						</div>
					</a>
				</div>
				<div class="post-text">
					<div class="post-content" v-html="rendContent(article)"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		asyncData ({ store, route }) {
			// 触发 action 后，会返回 Promise
			return store.dispatch('fetchDetail', {
				id: route.params.id,
				type: route.params.type
			})
		},

		title () {
			return this.article.title
		},

		computed: {
			// 从 store 的 state 对象中的获取 item
			article () {
				return this.$store.state.articleDetail
			}
		},

		methods: {
			rendContent (d) {
				 let imgStr = ''
				 if(d && d.imgjs && JSON.parse(d.imgjs).length) {
					 JSON.parse(d.imgjs).map(l => imgStr += `<img src="${l.url}" /><p>${l.desc || ''}</p>`)
				 }
				 return (d.content || '') + imgStr
			}
		}
	}

</script>

<style lang="scss">
@import '../assets/scss/mixin';
@import '../assets/scss/postman';

.phone-header {
	height: $th;
	line-height: $th;
	border-bottom: 1px solid #E0DEDC;
	position: fixed;
	width: 7.5rem;
	background: #fff;
	top: 0;
	z-index: 111;
	.top-back {
		display: block;
		width: $th;
		height: $th;
		background: url(../assets/images/back.png) no-repeat 50% 50% / auto 0.36rem;
		position: absolute;
		top: 0;
		left: 0;
	}
	.top-title {
		width: 55%;
		margin: 0 auto;
		font-size: 0.32rem;
		text-align: center;
		color: #3B3A38;
		@extend .singleline-ellipsis;
	}
}

.mop-detail-wrap {
	padding-top: $th;
}

.wrap-detail{
	padding: 0.15rem 0.35rem;
	border-bottom: 1px solid #f0edeb;
}
.post-text{
	padding-bottom: 0.2rem;
}
.post-title{
	font-size: 0.46rem;
	margin: 0.1rem 0 0.2rem;
}
.post-content{
	margin-top: 0.2rem;
	font-size: 0.3rem;
	line-height: 1.6;
	p{
		color: #666;
		text-align: justify;
	}
	img{
		max-width: 100%;
		margin: 0.2rem 0;
		height: auto;
	}
}
</style>
