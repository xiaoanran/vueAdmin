// 首页菜单导航相关
import api from '@/api'

const state = {
  // 所有菜单
  menuList: [],
  // 面包屑
  breadcrumbList: [],
  // 当前选中菜单
  menuCurr: null,
  // 当前左侧选中菜单列表
  asideMenuCurrList: [],
  // 左侧菜单根目录
  asideRootMenu: [],
  // 主页loading动画
  mainLoading: false
}

const getters = {
  // 获取所有顶级菜单(parentId === 0)
  getRootMenu: state => state.menuList.filter((m) => m.parentId === 0),
  // 获取菜单的所有子菜单
  getChildrenMenu: (state) => (menu) => state.menuList.filter((m) => {
    return m.left > menu.left && m.right < menu.right
  }),
  // 获取菜单的所有已第一层菜单
  getFirstChilds: state => (id) => state.menuList.filter((m) => m.parentId === id),
  // 根据id获取菜单信息
  getMenu: state => (id) => {
    let currArr = state.menuList.filter((m) => m.id === id)
    return currArr[0]
  }
}

const mutations = {
  // 设置面包屑
  setBreadcrumbList (state, list) {
    state.breadcrumbList = list
  },
  // 设置当前选中菜单
  setMenuCurr (state, menu) {
    state.menuCurr = menu
    let path = state.menuCurr.path.split(',')
    if (state.menuCurr.path === '0') {
      path[0] = state.menuCurr
    } else {
      path.forEach((value, index, array) => {
        path[index] = state.menuList.filter((m) => m.id === Number.parseInt(value))[0]
      })
      path.push(menu)
    }
    state.breadcrumbList = path
  },
  // 设置当前用户所有菜单
  setMenuList (state, list) {
    state.menuList = list
  },
  // 当前左侧选中菜单列表
  setAsideMenuCurrList (state, list) {
    state.asideMenuCurrList = list
  },
  // 左侧菜单根目录
  setAsideRootMenu (state, list) {
    state.asideRootMenu = list
  },
  // 首页是否加载状态
  setMainLoading (state, value) {
    state.mainLoading = value
  }
}

const actions = {
  // 获取当前用户的所有菜单
  getMenuList ({commit}) {
    commit('setMenuList', api.menuList)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
