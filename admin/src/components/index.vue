<template>
  <div class="app" :class="[headerFixedStatus, asideFixedStatus]">
    <header>
      
      <!--logo-->
      <div class="header-logo">
        <a href="#">
            <img src="/static/imgs/index/header/logo/logo.png" title="系统首页">
        </a>
      </div>
      
      <!--导航-->
      <nav class="header-nav">
        <ul class="clear">
          <template v-for="m in getRootMenu">
            <li @click="headerNavClick(m.id)">
              <a :class="{selected: asideMenuCurrList.includes(m.id)}" :href="m.href === '' ? 'javascript:;' : m.href">
                <img :src="m.icon" :title="m.title">
                <h2>{{ m.title }}</h2>
              </a>
            </li>
          </template>
          
        </ul>
      </nav>
      
      <!--个人信息-->
      <div class="header-user">
        <ul class="user-nav">
          <li>
            <span>
              <img src="/static/imgs/index/header/user/help.png" title="帮助">
            </span>
            <a href="javascript:;">帮助</a>
          </li>
          <li>
            <a class="abult" href="javascript:;">关于</a>
          </li>
          <li class="last">
            <a href="login.html" target="_parent">退出</a>
          </li>
        </ul>
       
        <div class="user-info">
          <span>{{user.userName}}</span>
          <i class="info-downarrow" @click="userProfileClick"></i>
          <div class="info-profile" v-show="userProfile" @mouseleave="userProfileLeave">
            <div class="profile-content">
              <div class="content-item">
              	<h5>常用操作</h5>
              	<ul>
              		<li>
              		  <a href="javascript:;">个人信息</a>
              		</li>
              		<li>
                    <a href="javascript:;">修改密码</a>
                  </li>
              	</ul>
              </div>
            </div>
          </div>
          <i>消息</i>
          <b>{{user.msgs}}</b>
        </div> 
      </div>
    </header>
    
    <aside @mouseleave="asideMouseleave">
      
      <!--取消固定-->
      <a class="aside-fixed" :class="asideFixedClass" href="javascript:;" :title="asideFixedTitle" @click="asideFixedClick">
        <i></i>
      </a>
      
      <div class="aside-top">
        <span></span>导航菜单
      </div>
      
      <ul class="aside-list">
        
        <template v-for="m in asideRootMenu">
          <!--第一层-->
          <li :class="{open: asideMenuCurrList.includes(m.id)}">
            <div class="list-title" @click="asideNavMenuClick(m.parentId, m.id)">
                <img :src="m.icon" />{{m.title}}
            </div>
            <ul class="list-item">
              <!--第二层-->
              <template v-for="c in getFirstChilds(m.id)">
                <li :class="{open: asideMenuCurrList.includes(c.id), selected: asideMenuCurrList.includes(c.id) && asideMenuCurrList.length >= 2}">
                  <div class="item-title" @click="asideNavMenuClick(m.parentId, m.id, c.id)">
                    <cite></cite>
                    <a :href="c.href === '' ? 'javascript:;' : c.href">{{c.title}}</a>
                    <i></i>
                  </div>
                  <!--第三层-->
                  <ul class="item-list">
                    <template v-for="l in getFirstChilds(c.id)">
                      <li :class="{selected: menuCurr.id === l.id}" @click="asideNavMenuClick(m.parentId, m.id, c.id, l.id)">
                        <router-link :to="l.href" >{{l.title}}</router-link>
                      </li>
                    
                    </template>
                  </ul>
                </li>
              </template>
              
            </ul>
          </li>
        </template>
        
      </ul>
      
      <div class="aside-fixed-box" :class="asideFixedBoxClass" @mouseenter="asideFixedBoxMouseenter"></div>
    </aside>
  
    <main>
        
      <!--当前位置-->
      <div class="main-place">
        <span>位置：</span>
        <ul>
          <li v-for="b in breadcrumbList">
            <a href="javascript:;">{{b.title}}</a>
          </li>
        </ul>
        <span class="place-fixed-head" :class="headerFixedClass" @click="headerFixedClick" :title="headerFixedTitle"></span>
      </div>
      
      <div class="main-content" :class="{loading: mainLoading}">
        <router-view></router-view>
      </div>
      
    </main>
    
    <footer>
      <cite>仅供学习交流，请勿用于任何商业用途</cite>
      <small>版权所有 2014 uimaker.com</small>
    </footer>
    
  </div>
</template>

<script>
  import { mapGetters, mapMutations, mapState, mapActions } from 'vuex'
  
  export default {
    name: 'index2',
    data () {
      return {
        // 头部显示状态
        headerFixedStatus: '',
        headerFixedTitle: '点击隐藏顶部导航',
        headerFixedClass: '',
        // 左侧菜单状态
        asideFixedStatus: '',
        asideFixedTitle: '点击隐藏左侧菜单',
        asideFixedClass: '',
        asideFixedBoxClass: '',
        // 左侧菜单listTitle点击
        asideListTitleStatus: '',
        // 个人信息下拉面板
        userProfile: false
      }
    },
    methods: {
      userProfileLeave () {
        this.userProfile = false
      },
      userProfileClick () {
        this.userProfile = !this.userProfile
      },
      // 头部点击显示隐藏
      headerFixedClick () {
        this.headerFixedStatus = (this.headerFixedStatus === 'header-hide' ? '' : 'header-hide')
        this.headerFixedTitle = (this.headerFixedTitle === '点击隐藏顶部导航' ? '点击展开顶部导航' : '点击隐藏顶部导航')
        this.headerFixedClass = (this.headerFixedClass === 'hide' ? '' : 'hide')
      },
      // 左侧点击显示隐藏
      asideFixedClick () {
        if (this.asideFixedClass === 'hide') {
          this.asideFixedClass = ''
          this.asideFixedStatus = ''
          this.asideFixedTitle = '点击隐藏左侧菜单'
        } else {
          this.asideFixedStatus = 'aside-hide'
          this.asideFixedTitle = '点击固定左侧菜单'
          this.asideFixedClass = 'hide'
          setTimeout(() => {
            this.asideFixedBoxClass = 'show'
          }, 300)
        }
      },
      // 左侧隐藏div鼠标移动
      asideFixedBoxMouseenter () {
        this.asideFixedStatus = ''
        setTimeout(() => {
          this.asideFixedBoxClass = ''
        }, 300)
      },
      // aside鼠标离开
      asideMouseleave () {
        if (this.asideFixedClass === 'hide') {
          this.asideFixedStatus = 'aside-hide'
          setTimeout(() => {
            this.asideFixedBoxClass = 'show'
          }, 300)
        }
      },
      // 头部导航点击
      headerNavClick (id) {
        this.setAsideRootMenu(this.getFirstChilds(id))
        this.setAsideMenuCurrList(this.getMenuFirstTree(id))
      },
      // 左侧菜单
      asideNavMenuClick (...ids) {
        let last = ids[ids.length - 1]
        let start = this.asideMenuCurrList.indexOf(last)
        if (start >= 0) {
          ids.splice(ids.length - 1, 1)
        } else {
          // 设置当前选中
          this.setMenuCurr(this.getMenu(last))
        }
        // 当前选中菜单列表
        this.setAsideMenuCurrList(ids)
      },
      // 获取该菜单下面所有第一个节点
      getMenuFirstTree (id) {
        // 获取第一层子节点
        let childFirst = [id]
        let temp = this.getFirstChilds(id)
        while (temp.length > 0) {
          childFirst.push(temp[0].id)
          temp = this.getFirstChilds(temp[0].id)
        }
        return childFirst
      },
      // mutation相关
      ...mapMutations('index', [
        'setMenuCurr',
        'setAsideMenuCurrList',
        'setAsideRootMenu',
        'setMainLoading'
      ]),
      // action相关
      ...mapActions('index', [
        'getMenuList'
      ])
    },
    computed: {
      ...mapState('index', [
        'breadcrumbList',
        'menuCurr',
        'asideMenuCurrList',
        'asideRootMenu',
        'mainLoading'
      ]),
      ...mapState('gobal', [
        'user'
      ]),
      ...mapGetters('index', [
        'getRootMenu',
        'getMenu',
        'getFirstChilds'
      ])
    },
    mounted () {
      /* this.$MyAlert.show({
        type: 'loading',
        message: '哈哈哈',
        backdrop: true
      }) */
      // 顶部导航
      this.getMenuList()
      setTimeout(() => {
        let curr = this.getRootMenu[0]
        this.setMenuCurr(curr)
        this.setAsideRootMenu(this.getFirstChilds(curr.id))
        this.setAsideMenuCurrList(this.getMenuFirstTree(curr.id))
      }, 1000)
    }
  }
</script>

<style lang="less">
  .app {
    width: inherit;
    height: inherit;
    &.header-hide {
      header {
        top: -88px;
      }
      aside,
      main {
        top: 0;
      }
    }
    &.aside-hide {
      aside {
        left: -187px;
      }
      main {
        left: 0px;
      }
    }
  }
  header,
  main,
  aside {
    transition: all .3s linear;
  }
  header,
  aside,
  main,
  footer {
    position: absolute;
  }
  header,
  aside,
  footer {
    left: 0;
  }
  header,
  main,
  footer {
    right: 0;
  }
  aside,
  main {
    top: 88px;
    bottom: 30px;
  }
  header {
    background: url(/static/imgs/index/header/topbg.gif) repeat-x;
    top: 0;
    width: inherit;
    &:before,
    &:after {
      content: "";
      display: table;
    }
    &:after {
      clear: both;
    }
    > * {
      float: left;
    }
    .header-logo {
      height: 88px;
      background: url(/static/imgs/index/header/logo/topleft.jpg) no-repeat;
      width: 320px;
      > a {
        > img {
          margin-top: 12px;
        }
      }
    }
    .header-nav {
      > ul {
        > li {
          float: left;
          width: 87px;
          height: 88px;
          text-align: center;
          > a {
            display: block;
            width: 87px;
            height: 88px;
            transition: background-color .3s linear;
            > img {
              margin-top: 10px;
            }
            > h2 {
              font-size: 14px;
              color: #d6e8f1;
            }
            &:hover {
              background: #000;
              color: #fff;
              background: none repeat scroll 0 0 #2b7fb5;
            }
            &.selected {
              background: url(/static/imgs/index/header/nav/navbg.png) no-repeat;
            }
          }
        }
      }
    }
    .header-user {
      height: 88px;
      background: url(/static/imgs/index/header/user/topright.jpg) no-repeat right;
      float: right;
      .user-nav {
        padding-top: 15px;
        float: right;
        padding-right: 1px;
        > li {
          float: left;
          padding-left: 9px;
          padding-right: 9px;
          background: url(/static/imgs/index/header/user/line.gif) no-repeat right;
          > span {
            position: relative;
            top: 3px;
            padding-right: 3px;
            > img {
              margin-top: -5px;
            }
          }
          > a {
            font-size: 13px;
            color: #e9f2f7;
          }
          &:last-child {
            background: none;
          }
        }
      }
      .user-info{
        height: 30px;
        background: url(/static/imgs/index/header/user/ub1.png) repeat-x;
        clear: both;
        margin-top: 10px;
        float: right;
        margin-right: 10px;
        border-radius: 30px;
        white-space: nowrap;
        position: relative;
        > span {
          float: left;
          display: inline-block;
          padding-right: 10px;
          text-overflow: ellipsis;
          overflow: hidden;
          background: url(/static/imgs/index/header/user/user.png) no-repeat 15px 10px;
          line-height: 30px;
          font-size: 14px;
          color: #b8ceda;
          padding-left: 20px;
          padding-left: 35px;
        }
        > i {
          display: inline-block;
          margin-right: 5px;
          font-style: normal;
          line-height: 30px;
          font-size: 14px;
          color: #b8ceda;
          &.info-downarrow {
            position: relative;
            top: -3px;
            display: inline-block;
            width: 9px;
            height: 5px;
            background: url(/static/imgs/index/header/user/jtt.png);
            cursor: pointer;
            &:hover {
              background: url(/static/imgs/index/header/user/jtt.png) -9px 0;
            }
          }
        }
        > b {
          display: inline-block;
          width: 20px;
          height: 18px;
          background: url(/static/imgs/index/header/user/msg.png);
          text-align: center;
          font-weight: normal;
          color: #fff;
          font-size: 14px;
          margin-right: 13px;
          margin-top: 7px;
          line-height: 18px;
        }
        .info-profile {
          position: absolute;
          padding: 15px;
          background: #fff;
          border: 2px solid #d3dee2;
          box-shadow: 2px 2px 3px #ebebeb;
          z-index: 2;
          .profile-content {
            position: relative;
            z-index: 1;
            .content-item {
              margin-top: 20px;
              h5 {
                color: #6fad33;
                font-size: 14px;
              }
              ul {
                li {
                  cursor: pointer;
                  margin-top: 10px;
                  a {
                    text-decoration: none;
                    color: #000;
                    outline: none;
                  }
                }
              }
              &:first-child {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
  }
  
  aside{
    width: 187px;
    background-color: #f0f9fd;
    // z-index: 1;
    > .aside-show {
      width: 15px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: none;
      // z-index: 2;
    }
    > .aside-fixed{
      position: absolute;
      right: 0;
      top: 8px;
      width: 22px;
      height: 24px;
      background: url(/static/imgs/index/aside/tdbg.png);
      // z-index: 2;
      i {
        display: block;
        margin: 5px auto 0;
        width: 16px;
        height: 16px;
        background: url(/static/imgs/index/aside/td02.png);
      }
      &.hide {
        > i {
          background: url(/static/imgs/index/aside/td01.png)
        }
      }
    }
    > .aside-top{
      background: url(/static/imgs/index/aside/lefttop.gif) repeat-x;
      height: 40px;
      color: #fff;
      font-size: 14px;
      line-height: 40px;
      > span {
          margin-left: 8px;
          margin-top: 10px;
          margin-right: 8px;
          background: url(/static/imgs/index/aside/leftico.png) no-repeat;
          width: 20px;
          height: 21px;
          float: left;
      }
    }
    > .aside-list{
      //border-right: solid 1px #b7d5df;
      background: url(/static/imgs/index/aside/leftline.gif) repeat-y right;
      position: absolute;
      overflow-x: hidden;
      overflow-y: auto;
      width: 100%;
      top: 40px;
      left: 0;
      bottom: 0;
      li {
        cursor: pointer;
      }
      > li {
        background: url(/static/imgs/index/aside/leftmenubg.gif) repeat-x;
        line-height: 35px;
        font-weight: bold;
        font-size: 14px;
        border-right: solid 1px #b7d5df;
        > .list-title {
          cursor: pointer;
          > img {
            float: left;
            margin: 10px 8px 0 12px;
            
          }
        }
        > .list-item {
          display: none;
          line-height: 30px;
          font-weight: normal;
          > li {
            > .item-title {
              height: 30px;
              > cite{
                display: block;
                float: left;
                margin-left: 32px;
                background: url(/static/imgs/index/aside/list.gif) no-repeat;
                width: 16px;
                height: 16px;
                margin-top: 7px;
              }
              > a {
                display: block;
              }
            }
            > .item-list {
              display: none;
              background: #d9ebf3;
              padding: 10px 0;
              border-bottom: 1px solid #b7d5df;
              > li {
                height: 25px;
                line-height: 25px;
                padding-left: 48px;
                border-left: 1px solid #d9ebf3;
                > a {
                  padding-left: 9px;
                  color: #000000;
                  font-size: 12px;
                  background: url(/static/imgs/index/aside/sub-menu-icon.png) 0 12px no-repeat;
                }
                > a:hover,
                &.selected > a{
                  color: #238ac5;
                }
                &.selected {
                  position: relative;
                  right: -1px;
                  border-left: none;
                  background: #fff;
                }
              }
            }
            &.selected{
              position: relative;
              background: url(/static/imgs/index/aside/libg.png) repeat-x;
              line-height: 30px;
              color: #fff;
              > .item-title {
                > cite {
                  background: url(/static/imgs/index/aside/list.gif) no-repeat;
                }
                > a {
                  color: #fff;
                }
              }
              > .item-list{
                > li {
                  > a {
                    display: block
                  }
                }
              }
            }
            &.open{
              display: block;
              > .item-title {
                > cite {
                  margin-top: 12px;
                  margin-left: 37px;
                  background: url(/static/imgs/index/aside/jtx.png) no-repeat;
                }
                > i{
                  display: block;
                  background: url(/static/imgs/index/aside/sj.png) no-repeat;
                  width: 6px;
                  height: 11px;
                  position: absolute;
                  right: 0;
                  // z-index: 10000;
                  top: 9px;
                  right: -1px;
                }
              }
              .item-list{
                display: block;
              }
            }
          }
        }
        &.open {
          > .list-item{
            display: block;
          }
        }
      }
    }
    .aside-fixed-box {
      width: 10px;
      position: absolute;
      top: 40px;
      bottom: 0;
      display: none;
      &.show {
        cursor: pointer;
        display: block;
        left: 187px;
        z-index: 100;
      }
    }
  }
  
  main{
    left: 187px;
    right: 0;
    // z-index: 0;
    > .main-place{
      height: 40px;
      background: url(/static/imgs/index/main/place/righttop.gif) repeat-x;
      font-size: 12px;
      > span {
        line-height: 40px;
        font-weight: bold;
        float: left;
        margin-left: 12px;
      }
      > ul {
        > li {
          float: left;
          line-height: 40px;
          padding-left: 7px;
          padding-right: 12px;
          background: url(/static/imgs/index/main/place/rlist.gif) no-repeat right;
          &:last-child{
            background: none;
          }
        }
      }
      > .place-fixed-head {
        position: absolute;
        right: 10px;
        cursor: pointer;
        top: 0;
        width: 21px;
        height: 18px;
        background: url(/static/imgs/index/main/place/totop.png);
        &.hide{
          background: url(/static/imgs/index/main/place/totop1.png);
        }
      }
    }
    > .main-content{
      position: absolute;
      left: 0;
      top: 40px;
      right: 0;
      bottom: 0;
      padding: 12px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    &.hide {
      padding-left: 0;
    }
  }
  
  footer{
    background: #f0f9fd;
    height: 30px;
    border-top: solid 1px #c2d2d7;
    line-height: 30px;
    color: #98a4a9;
    width: 100%;
    bottom: 0;
    z-index: 2;
    > cite{
      display: block;
      float: left;
      background: url(/static/imgs/index/main/footer/info.png) no-repeat 11px 8px;
      padding-left: 35px;
    }
    > small{
      display: block;
      float: right;
      font-style: normal;
      margin-right: 10px;
      background: url(/static/imgs/index/main/footer/fjt.png) no-repeat right;
      padding-right: 12px;
    }
  }
</style>