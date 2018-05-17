import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Error from '@/components/module/error'
import Ztree from '@/components/ztree'
import ModifyPassword from '@/components/user/modifyPassword'
import Browsers from '@/components/module/browsers'
import * as Constant from '@/constant/gobal'
Vue.use(Router)

const router = new Router({
  base: '/admin',
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      meta: {
        [Constant.LOGIN_AUTH]: true
      },
      children: [
        {
          path: '',
          component: {
            template: '<div>22222222222</div>'
          }
        },
        {
          path: 'test',
          component: {
            ModifyPassword
          }
        },
        {
          path: 'modifyPassword',
          component: ModifyPassword
        }
      ]
    },
    {
      path: '/error/:code',
      name: 'error',
      props: true,
      component: Error,
      meta: {
        [Constant.LOGIN_AUTH]: true
      }
    },
    {
      path: '/browsers',
      name: 'browsers',
      props: true,
      component: Browsers,
      meta: {
        [Constant.LOGIN_AUTH]: true
      }
    },
    {
      path: '/ztree',
      name: 'ztree',
      props: true,
      component: Ztree,
      meta: {
        [Constant.LOGIN_AUTH]: true
      }
    },
    {
      path: '/test',
      name: 'test',
      component: Index,
      meta: {
        [Constant.LOGIN_AUTH]: true
      }
    }
  ]
})

// 是否登录
router.beforeEach((to, from, next) => {
  // 如果是登录，无需验证就放行
  /* if ((sessionStorage.getItem(Constant.LOGIN_STATUS) && !to.meta[Constant.LOGIN_AUTH]) || to.meta[Constant.LOGIN_AUTH] || to.name === 'login') {
    next()
  } else {
    next({
      path: '/login'
    })
  } */
  next()
})

export default router
