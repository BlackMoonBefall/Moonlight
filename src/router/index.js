/*于此配置所有前端路由信息*/ 
import VueRouter from 'vue-router'
import Vue from 'vue'
//1.通过Vue.use（插件），安装插件，任何插件都必须先这样做
Vue.use(VueRouter) 





//路由惰性加载----------------
const Home = () => import('views/home/Home')
const Aboutme = () => import('views/about/AboutMe')
const Collect = () => import('views/collect/Collect')
const Subs = () => import('views/subs/Subs')
const User = () => import('views/user/User')


//2.创建VueRouter对象
const routes = [         //路由配置
  {
    path:'/',
    redirect:'/home',           //重定向
    meta:{
      title:'首页'
    }
  },
  {
    path:'/home',
    component:Home,           
    meta:{
      title:'月光，在线绘本艺术小屋'
    }
  },
  {
    path:'/aboutme',
    component:Aboutme,          
    meta:{
      title:'关于'
    }
  },
  {
    path:'/collect',
    component:Collect,          
    meta:{
      title:'收藏夹'
    }
  },
  {
    path:'/subs',
    component:Subs,          
    meta:{
      title:'关注的人'
    }
  },
  {
    path:'/user',
    component:User,          
    meta:{
      title:'我'
    }
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
  linkActiveClass:'router-active'
})



router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})


//.3将router对象传入Vue实例,导出
export default router