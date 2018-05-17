<template>
  <div class="login">
    <div class="login-box">
      <div class="box-left">
        <img class="left-flower" src="/static/imgs/login/flower.png" />
        <img class="left-rahmen" src="/static/imgs/login/rahmen.png" />
        <span class="left-sun"></span>
        <img class="left-light fadeInUp animated" src="/static/imgs/login/light.png" />
        <img class="left-pens fadeInUp animated" src="/static/imgs/login/pens.png" />
        <img class="left-pc fadeInUp animated" src="/static/imgs/login/pc.png" />
        <img class="left-vapour fadeInUp animated" src="/static/imgs/login/vapour.png" />
        <img class="left-cup fadeInUp animated" src="/static/imgs/login/cup.png" />
        <img class="left-books fadeInUp animated" src="/static/imgs/login/books.png" />
        <img class="left-desk fadeInUp animated" src="/static/imgs/login/desk.jpg" />
      </div>
      <div class="box-right">
        <h4 class="fadeInDown animated">信息管理平台登录</h4>
        <div class="right-group">
          <label class="iconfont icon-yonghuming"></label>
          <input v-model="userName" class="right-name" type="text" maxlength="18" placeholder="用户名"/>
        </div>
        <div class="right-group">
          <label class="iconfont icon-mima"></label>
          <input v-model="userPwd" class="right-pwd" type="password" maxlength="18" placeholder="密码"/>
        </div>
        <div class="right-group">
          <label class="iconfont icon-yanzhengma"></label>
          <input v-model="code" class="right-code" type="text" placeholder="验证码"/>
          <img class="right-code-img" :src="verify" @click="changeCodeClick"/>
        </div>
        <div class="right-group">
           <button class="my-button blue submit" @click="userLoginClick">登录</button>
        </div>
      </div>
    </div>
    <div class="cloud"></div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        loading: false,
        dotting: false,
        // 用户名密码验证码
        userName: 'heishou1',
        userPwd: 'heishou0911',
        code: '1234',
        verify: 'http://localhost:8080/admin/verify.img'
      }
    },
    methods: {
      // 登录
      userLoginClick () {
        if (this.loading) {
          return false
        }
        this.loading = true
        let self = this
        /* if (!(/^[a-zA-Z]\w{7,15}$/.test(this.userName))) {
          this.$MyAlert.show({
            type: 'fail',
            message: '用户名非法',
            timeout: 1000,
            closeAfter () {
              self.loading = false
            }
          })
          return
        }
        if (!(/^[a-zA-Z]\w{7,15}$/.test(this.userPwd))) {
          this.$MyAlert.show({
            type: 'fail',
            message: '密码非法',
            timeout: 1000,
            closeAfter () {
              self.loading = false
            }
          })
          return
        }
        if (this.code === '' || !(/^[0-9a-zA-Z]{4,6}$/.test(this.code))) {
          this.$MyAlert.show({
            type: 'fail',
            message: '验证码非法',
            timeout: 1000,
            closeAfter () {
              self.loading = false
            }
          })
          return
        }
        this.$MyAlert.show({
          type: 'loading',
          message: '正在登录..',
          timeout: -1
        }) */
        this.$http.post('/login', {
          userName: this.userName,
          userPwd: this.userPwd,
          code: this.code
        }).then(function (result) {
          if (result.status) {
            self.$MyAlert.show({
              type: 'loading',
              message: result.message,
              timeout: -1,
              closeAfter () {
                self.loading = false
              }
            })
          } else {
            self.$MyAlert.show({
              type: 'fail',
              message: result.message,
              timeout: 1000,
              closeAfter () {
                self.loading = false
              }
            })
          }
        }).catch(function (error) {
          console.error(error.message)
        })
      },
      /**
       * 点击切换验证码
       */
      changeCodeClick () {
        this.verify = 'http://localhost:8080/admin/verify.img?r=' + Math.random().toFixed(2)
      }
    },
    mounted () {
      setInterval(() => {
        this.verify = 'http://localhost:8080/admin/verify.img?r=' + Math.random().toFixed(2)
      }, 20000)
    }
  }
</script>

<style lang="less">
  .login {
    width: inherit;
    height: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: url(/static/imgs/login/hero.jpg) center center;
    background-size: cover;
    .login-box {
      width: 585px;
      height: 337px;
      background-color: #fff;
      overflow: hidden;
      //box-shadow: 2px 2px 8px rgba(0,54,91,0.1),-1px -1px 8px rgba(0,54,91,0.1);
      // box-shadow: 2px 2px 2px rgba(193,206,224,0.5),-1px -1px 2px rgba(193,206,224,0.5);
      border: 1px solid rgba(206,215,232, .7);
      //border-radius: 5px;
      z-index: 2;
      .box-left,
      .box-right {
        float: left;
      }
      .box-left {
        width: 260px;
        height: inherit;
        background-color: #52B8F2;
        position: relative;
        opacity: .8;
        overflow: hidden;
        
        > img,
        .left-sun {
          position: absolute;
        }
        .left-desk {
          width: 250px;
          bottom: 3px;
          left: 5px;
        }
        .left-pc {
          width: 70px;
          bottom: 68px;
          left: 95px;
        }
        .left-light {
          width: 50px;
          bottom: 68px;
          left: 10px;
        }
        .left-pens {
          width: 15px;
          bottom: 68px;
          left: 65px;
        }
        .left-books {
          bottom: 68px;
          width: 40px;
          right: 5px;
        }
        .left-cup {
          width: 18px;
          bottom: 68px;
          right: 60px;
        }
        .left-vapour {
          bottom: 85px;
          width: 18px;
          right: 60px;
          animation: vapourUpHide 1.5s ease-out 0s infinite;
        }
        .left-flower {
          width: 60px;
          top: 83px;
          left: 5px;
          transform: scale(0);
          animation: bounceIn 1s 1s ease-in forwards;
        }
        .left-rahmen {
          right: 10px;
          width: 70px;
          top: 80px;
          animation: hingeNotEnd 1s 2s ease-in forwards;
        }
      }
      .box-right {
        width: 323px;
        height: 100%;
        text-align: center;
        background-color: #F8FAFE;
        .submit {
          padding: 7px 95px;
          margin-right: 0;
        }
        > h4 {
          text-align: center;
          font-size: 18px;
          margin-top: 50px;
          margin-bottom: 40px;
          font-weight: 100;
          color: #515B69;
        }
        .right-group {
          margin: 10px auto;
          width: 220px;
          position: relative;
          .icon-yonghuming,
          .icon-mima,
          .icon-yanzhengma {
            position: absolute;
            top: 6px;
            left: 6px;
            font-size: 14px;
            color: #B7B5BB;
          }
          .icon-mima {
            
          }
          .icon-yonghuming {
          }
          .right-name,
          .right-pwd,
          .right-code {
            border: 1px solid #F0EFF3;
            height: 30px;
          }
          .right-name:focus,
          .right-pwd:focus,
          .right-code:focus{
            border: 1px solid #52B8F2;
          }
          .right-name,
          .right-pwd {
            width: inherit;
            padding: 0 10px 0 25px;
          }
          .right-name {
            
          }
          .right-pwd {
            
          }
          .right-code {
            width: 110px;
            float: left;
            padding: 0 10px 0 25px;
          }
          .right-code-img {
            width: 100px;
            height: 29px;
          }
          .right-submit {
            width: 220px;
            margin-top: 10px;
            border-radius: 0 !important;
          }
        }
      }
    }
    .cloud {
      position: absolute;
      top: 0;
      left: 0;
      width: 5200px;
      height: 100%;
      min-height: 1140px;
      z-index: 1;
      background: url(/static/imgs/login/clouds.png) 0 100% repeat-x;
      background-size: 2600px 1140px;
      animation: horizontalLoop 20s linear infinite;
      display: blcok;
      border-radius: none !important;
    }
  }
  
  @keyframes horizontalLoop {
    0 {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
  
  @keyframes vapourUpHide {
    0 {
      transform: translateY(5px);
    }
    75% {
      transform: translateY(-5px);
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes sunUp {
    0 {
      transform: translate(-5px, 5px);
    }
    100% {
      transform: translate(5px, -2px);
    }
  }
  
  @keyframes hingeNotEnd {
    0% {
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
  
    20%, 60% {
      transform: rotate3d(0, 0, 1, 80deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
    }
  
    40%, 80%, 100% {
      transform: rotate3d(0, 0, 1, 60deg);
      transform-origin: top left;
      animation-timing-function: ease-in-out;
      opacity: 1;
    }
  }
  
</style>