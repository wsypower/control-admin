/*
 * @Author: wei.yafei
 * @Date: 2019-06-14 15:44:35
 * @Last Modified by: wei.yafei
 * @Last Modified time: 2019-06-24 17:13:15
 */

/*=============================================
 =                  router配置                 =
 =============================================*/

import layoutHeaderAside from '@/layouts/header-aside'
// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// 对应utils下util.import.development.js和util.import.production.js
// eslint-disable-next-line no-unused-vars
const _import = require('@/utils/util.import.' + process.env.NODE_ENV)

/*=============================================
=                  在主框架内显示               =
=============================================*/
const frameIn = [
  {
    path: '/',
    name: 'layoutHeaderAside',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    meta: { title: '管控平台' },
    children: [
      //测试
      {
        path: 'page1',
        name: 'index',
        hidden: true,
        component: _import('account/page.vue')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('function/redirect')
      }
    ]
  }
]

/*=============================================
=                 在主框架之外显示               =
=============================================*/
/* 登录 */
const frameOut = []

/* 错误页面-404 */
const errorPage = []

/*=============================================
=               导出需要显示菜单的               =
=============================================*/

export const frameInRoutes = frameIn

/*=============================================
=                 重新组织后导出                =
=============================================*/

export default [...frameIn, ...errorPage, ...frameOut]
