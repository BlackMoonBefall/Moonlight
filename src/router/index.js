/*于此配置所有前端路由信息*/ 
import VueRouter from 'vue-router'
import Vue from 'vue'
//1.通过Vue.use（插件），安装插件，任何插件都必须先这样做
Vue.use(VueRouter) 





//路由惰性加载----------------
const Home = () => import('views/home/Home')
const Detail = () => import('views/detail/Detail')
const Aboutme = () => import('views/about/AboutMe')
const Collect = () => import('views/collect/Collect')
const Rank = () => import('views/rank/Rank')
const User = () => import('views/user/User')
const Book = () => import('views/book/Book')

//2.创建VueRouter对象
const routes = [         //路由配置
  {
    path:'/',
    component:Home,  
    // redirect:'/home',           //重定向
    meta:{
      title:'月光，在线文学艺术小屋'
    }
  },
  {
    path:'/home',
    component:Home,           
    meta:{
      title:'月光，在线文学艺术小屋'
    }
  },
  {
    path:'/detail/:iid',
    component:Detail,           
    meta:{
      title:'详情页'
    }
  },
  {
    path:'/book/:iid',
    component:Book,           
    meta:{
      title:'月光书城'
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
    path:'/rank',
    component:Rank,          
    meta:{
      title:'排行榜'
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
  linkActiveClass:'router-active' //给当前激活的路由自动添加的class名字
})



router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})


//.3将router对象传入Vue实例,导出
export default router