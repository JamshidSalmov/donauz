import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
      {
        path: '/main',
        name: 'main',
        meta: {layout: 'main'},
        component: () => import(/* webpackChunkName: "about" */ "@/views/MainPage/MainContent.vue")
      },
      {
        path: '/login',
        name: 'login',
        meta: {layout: 'login'},
        component: () => import(/* webpackChunkName: "about" */ "@/views/LoginPages/Login.vue")
      },
      {
        path: '/rigestruser',
        name: 'registruser',
        meta: {layout: 'login'},
        component: () => import(/* webpackChunkName: "about" */ "@/views/RigestrUser/RegestrUser.vue")
      },
      {
        path: '/findpassword',
        name: 'findpassword',
        meta: {layout: 'login'},
        component: () => import(/* webpackChunkName: "about" */ "@/views/FaindPassword/FaindPassword.vue")
      },
      {
        path: '/cheakmessage',
        name: 'cheakmessage',
        meta: {layout: 'login'},
        component: () => import(/* webpackChunkName: "about" */ "@/views/cheakMessage/cheakMessage.vue")
      },
      {
        path: '/forusers',
        name: 'forusers',
        meta: {layout: 'user'},
        component: () => import(/* webpackChunkName: "about" */ "@/views/MainPage/MainContentUser.vue")
      },
      {
        path: '/detail/:id',
        name: 'detail',
        meta: {layout: 'user'},
        component: () => import(/* webpackChunkName: "about" */ "@/components/ProductDetail.vue")
      },
      {
        path: '/savat/:id',
        name: 'savat',
        meta: {layout: 'user'},
        component: () => import(/* webpackChunkName: "about" */ "@/components/Savatcha.vue")
      },
      {
        path: '/search',
        name: 'search',
        meta: {layout: 'login'},
        component: () => import(/* webpackChunkName: "about" */ '@/components/SearchComp.vue')
      },
      {
        path: '/buypage',
        name: 'buypage',
        meta: {layout: 'user'},
        component: () => import(/* webpackChunkName: "about" */ "@/components/BuyComponent.vue")
      },
      {
        path: '/ariza',
        name: 'ariza',
        meta: {layout: 'user'},
        component: () => import(/* webpackChunkName: "about" */ '@/components/ArizaComponent.vue')
      },
      {
        path: '/aloqa',
        name: 'aloqa',
        meta: {layout: 'user'},
        component: () => import(/* webpackChunkName: "about" */ '@/components/AloqaComponent.vue')
      },
  // {
  //   path: '/modalform/:id',
  //   name: 'modalform',
  //   meta: {layout: 'login'},
  //   component: () => import(/* webpackChunkName: "about" */ '@/components/BootstrapComp/ModalForm.vue')
  // },

  // {
  //   path: '/modalform/:id',
  //   name: 'modalform',
  //   meta: {layout: 'login'},
  //   component: () => import(/* webpackChunkName: "about" */ '@/components/BootstrapComp/ModalForm.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, form, next)=>{
//   if(to.path != '/login'){
//     if(localStorage.Login != ''){
//       next()
//     }
//     else{
//       next('/login')
//     }
//   }
//   else{
//     next()
//   }
// })

export default router
