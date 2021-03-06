import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'people',
    noDropdown: true,
    children: [{ path: 'index', component: _import('introduction/index'), name: '简述' }]
  }
]

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'lock',
    meta: { role: ['admin'] },
    noDropdown: true,
    children: [{ path: 'index', component: _import('permission/index'), name: '权限测试页', meta: { role: ['admin'] }}]
  },

/*
* 本项目的路由设置
*/
  {
    path: '/my',
    component: Layout,
    redirect: '/my/personInfo',
    name: '我的面板',
    icon: 'icon',
    children: [
      { path: 'personInfo', component: _import('my/personInfo/index'), name: '个人信息' },
      { path: 'modifyPsw', component: _import('my/modifyPsw/index'), name: '修改密码' }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    name: '用户管理',
    icon: 'component',
    children: [
      { path: 'list', component: _import('user/userInfo/list'), name: '用户列表' },
      { path: 'personInfo', component: _import('user/userInfo/index'), name: '个人信息详情', hidden: true },
      { path: 'accountBalance', component: _import('user/userInfo/accountBalance'), name: '账户余额', hidden: true },
      { path: 'credit', component: _import('user/userInfo/credit'), name: '信贷记录', hidden: true },
      { path: 'money', component: _import('user/userInfo/money'), name: '理财记录', hidden: true },
      { path: 'balance_detail', component: _import('user/userInfo/balance_detail'), name: '余额详情', hidden: true },

      { path: 'corporation', component: _import('user/corporation/list'), name: '企业列表' },
      { path: 'corporation_detail', component: _import('user/corporation/corporation_detail'), name: '企业详情', hidden: true },

      { path: 'bank', component: _import('user/bank/list'), name: '银行列表' },
      { path: 'bank_detail', component: _import('user/bank/bank_detail'), name: '银行详情', hidden: true },
      //
      { path: 'xing', component: _import('user/userInfo/xing'), name: '**组件' }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/list',
    name: '产品管理',
    icon: 'component',
    children: [
      { path: 'list', component: _import('product/credit_product_list'), name: '信贷产品列表' },
      { path: 'add_credit', component: _import('product/add_credit'), name: '增加信贷产品' }
    ]
  },
  {
    path: '/deal',
    component: Layout,
    redirect: '/deal/list',
    name: '交易管理',
    icon: 'component',
    children: [
      { path: 'borrow', component: _import('deal/borrow/list'), name: '信贷借款列表' },
      { path: 'borrow_datail', component: _import('deal/borrow/detail'), name: '信贷借款详情' },
      { path: 'repay', component: _import('deal/repay/list'), name: '信贷还款列表' }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/list',
    name: '系统设置',
    icon: 'component',
    children: [
      { path: 'admin_user_list', component: _import('setting/admin_user_list/list'), name: '后台用户列表' },
      { path: 'add_admin_user', component: _import('setting/add_admin_user/list'), name: '新增后台人员' }
    ]
  },

/*
* 以下是所参考官网的demo
*/
  {
    path: '/icon',
    component: Layout,
    icon: 'icon',
    noDropdown: true,
    children: [{ path: 'index', component: _import('svg-icons/index'), name: 'icons' }]
  },
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'component',
    children: [
      { path: 'index', component: _import('components/index'), name: '介绍 ' },
      { path: 'tinymce', component: _import('components/tinymce'), name: '富文本编辑器' },
      { path: 'markdown', component: _import('components/markdown'), name: 'Markdown' },
      { path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON编辑器' },
      { path: 'dndlist', component: _import('components/dndList'), name: '列表拖拽' },
      { path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane' },
      { path: 'avatarupload', component: _import('components/avatarUpload'), name: '头像上传' },
      { path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone' },
      { path: 'sticky', component: _import('components/sticky'), name: 'Sticky' },
      { path: 'countto', component: _import('components/countTo'), name: 'CountTo' },
      { path: 'mixin', component: _import('components/mixin'), name: '小组件' },
      { path: 'backtotop', component: _import('components/backToTop'), name: '返回顶部' }
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'chart',
    children: [
      { path: 'index', component: _import('charts/index'), name: '介绍' },
      { path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表' },
      { path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2' },
      { path: 'line', component: _import('charts/line'), name: '折线图' },
      { path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表' }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: '综合实例',
    icon: 'example',
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/table',
        name: 'Table',
        icon: 'table',
        children: [
          { path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table' },
          { path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table' },
          { path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑' },
          { path: 'table', component: _import('example/table/table'), name: '综合table' }
        ]
      },
      { path: 'form/edit', icon: 'form', component: _import('example/form'), name: '编辑Form', meta: { isEdit: true }},
      { path: 'form/create', icon: 'form', component: _import('example/form'), name: '创建Form' },
      { path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'Tab' }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: '错误页面',
    icon: '404',
    children: [
      { path: '401', component: _import('errorPage/401'), name: '401' },
      // { path: '401', component: _import('errorPage/tablefix'), name: '401' },
      { path: '404', component: _import('errorPage/404'), name: '404' }
    ]
  },
  {
    path: '/errlog',
    component: Layout,
    redirect: 'noredirect',
    name: 'errlog',
    icon: 'bug',
    noDropdown: true,
    children: [{ path: 'log', component: _import('errlog/index'), name: '错误日志' }]
  },
  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'excel',
    children: [
      { path: 'download', component: _import('excel/index'), name: 'export excel' },
      { path: 'download2', component: _import('excel/selectExcel'), name: 'export selected' },
      { path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    name: 'zip',
    icon: 'zip',
    children: [
      { path: 'download', component: _import('zip/index'), name: 'export zip' }
    ]
  },
  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    name: 'theme',
    icon: 'theme',
    noDropdown: true,
    children: [{ path: 'index', component: _import('theme/index'), name: '换肤' }]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    icon: 'clipboard',
    noDropdown: true,
    children: [{ path: 'index', component: _import('clipboard/index'), name: 'clipboard' }]
  },

  { path: '*', redirect: '/404', hidden: true }
]
