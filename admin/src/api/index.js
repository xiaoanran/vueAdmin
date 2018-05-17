const menuList = [
  {
    id: 1,
    title: '工作台',
    name: '',
    href: '',
    parentId: 0,
    left: 1,
    right: 6,
    path: '0',
    icon: '/static/imgs/index/header/nav/icon01.png'
  },
  {
    id: 2,
    title: '模型管理',
    name: '',
    href: '',
    parentId: 0,
    path: '0',
    icon: '/static/imgs/index/header/nav/icon02.png'
  },
  {
    id: 3,
    title: '模块设计',
    name: '',
    href: '',
    parentId: 0,
    path: '0',
    icon: '/static/imgs/index/header/nav/icon03.png'
  },
  {
    id: 4,
    title: '常用工具',
    name: '',
    href: '',
    parentId: 0,
    path: '0',
    icon: '/static/imgs/index/header/nav/icon04.png'
  },
  {
    id: 5,
    title: '文件管理',
    name: '',
    href: '',
    parentId: 0,
    path: '0',
    icon: '/static/imgs/index/header/nav/icon05.png'
  },
  {
    id: 6,
    title: '系统设置',
    name: '',
    href: '',
    parentId: 0,
    path: '0',
    icon: '/static/imgs/index/header/nav/icon06.png'
  },
  {
    id: 7,
    title: '管理信息',
    name: '',
    href: '',
    parentId: 1,
    left: 2,
    right: 5,
    path: '1',
    icon: '/static/imgs/index/aside/leftico01.png'
  },
  {
    id: 8,
    title: '首页',
    name: '',
    href: '',
    parentId: 7,
    left: 3,
    right: 4,
    path: '1,7',
    icon: ''
  },
  {
    id: 9,
    title: '文件管理',
    name: '',
    href: '/index/modifyPassword',
    parentId: 8,
    left: 3,
    right: 4,
    path: '1,7,8',
    icon: ''
  },
  {
    id: 10,
    title: '文件管理2',
    name: '',
    href: '',
    parentId: 8,
    path: '1,7,8',
    left: 3,
    right: 4,
    icon: ''
  },
  {
    id: 11,
    title: '管理信息2',
    name: '',
    href: '',
    parentId: 1,
    path: '1',
    left: 2,
    right: 5,
    icon: '/static/imgs/index/aside/leftico01.png'
  },
  {
    id: 12,
    title: '首页',
    name: '',
    href: '',
    parentId: 11,
    left: 3,
    right: 4,
    path: '1,11',
    icon: ''
  },
  {
    id: 13,
    title: '文件管理',
    name: '',
    href: '',
    parentId: 12,
    left: 3,
    right: 4,
    path: '1,11,12',
    icon: ''
  },
  {
    id: 14,
    title: '文件管理2',
    name: '',
    href: '',
    parentId: 12,
    left: 3,
    right: 4,
    path: '1,11,12',
    icon: ''
  }
]

// css统一前缀
const ns = 'standard-'

export default {
  menuList,
  ns
}
