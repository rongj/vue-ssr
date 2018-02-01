<template>
	<div class="phone-wrap">
	首页测试

<!-- 		<div class="mop-header">
			<a href="//m.mop.com" class="mop-header-l logo">
				<img src="../assets/images/logo.png">
			</a>
			<div class="mop-header-c">
				<div class="mop-top-tab">
					<a href="/" class="active">动态</a>
					<router-link to="detail">圈子</router-link>
				</div>
			</div>
			<div class="mop-header-r">
				<a href="" class="mop-top-post"></a>
				<a href="" class="mop-top-user"></a>
			</div>
		</div>
		<div class="tabs-nav">
		    <div class="tabs-nav-items">
		        <span v-for="(item, index) in subscribePlate" :key="index"  :class="{'active': index === activeIndex}" @click="handleTab(item, index, $event)">{{item.plateName}}</span>
		        <i class="tabs-line"></i>
		    </div>
		    <div class="tabs-nav-more"></div>
		    <div class="tabs-nav-add"></div>
		</div> -->
	</div>
</template>

<script>

	export default {

	}

</script>

<style lang="scss">
	@import '../assets/scss/mixin';
	@import '../assets/scss/list';
	@import '../assets/scss/spinner';

	/* 顶部 */
	.mop-header {
		width: 7.5rem;
		background: #fff;
		height: $th;
		line-height: $th;
		position: fixed;
		top: 0;
		z-index: 2;
		border-bottom: 1px solid #f2f2f1;
		display: none;
		.mop-header-c {
			width: 4rem;
			margin: 0 auto;
		}
		.mop-header-l {
			position: absolute;
			left: 0;
			top: 0;
			height: $th;
		}
		.mop-header-r {
			position: absolute;
			right: 0;
			top: 0;
			height: $th;
			a {
				display: block;
				width: $th;
				height: $th;
				float: left;
			}
		}
		.logo {
			display: block;
			margin-left: 0.2rem;
			img {
				height: 0.6rem;
			}
		}
	}
	.mop-top-tab {
		text-align: center;
		a {
			font-size: 0.3rem;
			font-weight: bold;
			color: $txc;
			margin: 0 0.2rem;
			position: relative;
			&.active {
				color: $mc;
				&:after {
					content: '';
					display: block;
					width: 0.5rem;
					height: 0.04rem;
					border-radius: 0.02rem;
					position: absolute;
					left: 50%;
					margin-left: -0.25rem;
					top: 0.45rem;
					background: $mc;
				}
			}
		}
	}
	.mop-top-user {
		background: url(../assets/images/user.png) no-repeat 50% 50% / auto 0.4rem;
	}
	.mop-top-post {
		width: 0.46rem!important;
		background: url(../assets/images/new.png) no-repeat 50% 50% / auto 0.4rem;
	}

	/* 选项卡 */
	.tabs-nav-items::-webkit-scrollbar{
		display: none;
		height: 0;
	}
	.tabs-nav{
		background: #fff;
		height: $th;
		line-height: $th;
		width: 7.5rem;
		position: fixed;
		z-index: 2;
		// margin-bottom: -1px;
		top: 0;
		&:after{
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			background: #eaeaea;
			position: absolute;
			left: 0;
			bottom: 0;
			z-index: 1;
			transition: all 0.3s;
		}
		.tabs-nav-items{
			white-space: nowrap;
			overflow-y: hidden;
			overflow-x: auto;
			-webkit-overflow-scrolling : touch;
			padding-right: $th;
			height: $th;
			transition: all 0.3s;
			position: relative;
			z-index: 2;
			span{
				display: inline-block;
				height: $th;
				padding: 0 0.2rem;
				color: #888888;
				font-size: 0.28rem;
				&.active{
					color: $mc;
				}
			}
			.tabs-line{
				display: block;
				width: 0.96rem;
				height: 3px;
				background: $mc;
				position: absolute;
				left: 0;
				border-radius: 3px;
				bottom:0;
				transition: all 0.3s;
			}
		}
		.tabs-nav-add{
			position: absolute;
			right: 0;
			top: -1px;
			width: 0.6rem;
			height: $th;
			background: #fff url(../assets/images/list_new.png) no-repeat 0 50% / auto 0.4rem;
			z-index: 11;
		}
		.tabs-nav-more{
			position: absolute;
			right: 0.6rem;
			top: -1px;
			width: 0.4rem;
			height: $th;
			z-index: 11;
			background: -webkit-linear-gradient(left,rgba(255,255,255,0),rgba(255,255,255,1));
		}
	}

	/* 内容区 */
	.phone-body {
		padding-top: $th;
	}
</style>

