<template>
  <div id=bgc>
		<navi-bar class="about-nav"><div slot="center">关于本站</div></navi-bar>
    <div id="ME">
			<img src="~assets/img/about/Moonlight.png"/>
		</div>
		<div class="content">
			<h1 class="baseif">月辰</h1>
			<h4 class="baseif">邮箱：</h4>
			<p class="baseif">catchthemoon@qq.com</p>
			<h4 class="baseif"></h4>     <!-- 无意义，留白空行 -->
			<h4 class="baseif"></h4>
			<a class="extif" href="#">商业合作</a>
			<a class="extif" href="https://mail.qq.com/">发送邮件</a>
			<a class="extif" href="#">在线留言</a>
	
		</div>
		<audio id="bgm" autoplay="autoplay" loop="loop" preload="auto" src="~assets/media/bgm.mp3">
		</audio>
  </div>  
</template>

<script>
import NaviBar from 'components/common/navibar/NaviBar'
export default {
	name:'aboutme',
	components:{
		NaviBar,
	}
}

	
</script>


<style scoped>
body{
	background-color: rgb(255, 255, 255);
}
.about-nav{
  background-color: rgb(156, 151, 226);
  color: #fff;
}

#ME{
	text-align:center;
}
#ME > img{
	text-align:center;
	margin-top: 30px;
	width: 260px;
	border-radius:50%;	
	animation: myimg 5s infinite;
	animation-direction:alternate;
}
.content{
	text-align:center;
}
.baseif{
	padding: 5px 0px 5px 0px;
	animation: myext 6s 1;
}
.extif{
	padding: 5px 15px 5px 5px;
	opacity:0;
	animation: mybase 6s 1 2s;
	animation-fill-mode:forwards;
}

@keyframes myimg {
	from {transform:rotate(-60deg);}
	to {transform:rotate(150deg);}
}	
@keyframes mybase{
	from {opacity:0;}
	to {opacity:1;}
}
@keyframes myext{
	from {opacity:0;}
	to {opacity:1;}
}


</style>