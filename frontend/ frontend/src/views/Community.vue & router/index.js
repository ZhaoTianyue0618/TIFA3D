//router/index.js
import {createRouter,createWebHistory} from 'vue-router'
export default createRouter({
  history:createWebHistory(),
  routes:[
    {path:'/',redirect:'/generate'},
    {path:'/generate',component:()=>import('@/views/Generate.vue')},
    {路径:'/print',组件:()=>导入('@/views/PrintService.vue')},
    {path:'/community',component:()=>import('@/views/Community.vue')}
  ]
})
