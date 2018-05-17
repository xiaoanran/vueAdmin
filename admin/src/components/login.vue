<template>
  <div class="login">
    <div class="login-box">
      <img class="box-logo" src="/static/imgs/login/loginlogo.png"/>
      <div class="box-form">
        <ul>
          <li>
            <input class="form-user" type="text" autofocus placeholder="用户名" maxlength="16"/>
          </li>
          <li>
            <input class="form-pwd" type="password" placeholder="密码" maxlength="16"/>
          </li>
          <li v-if="!showCode">
            <my-sliding-validate :dragBefore="dragBefore" :dragStop="dragStop"></my-sliding-validate>
          </li>
          <li class="form-code" v-if="showCode">
            <span>
              <input type="text" placeholder="验证码"/>
            </span>
            <img src=""/>
          </li>
          <li class="form-button">
            <input type="submit" value="登录" />
            <label>
              <a href="javascript:;" @click="forgetPasswordClick">忘记密码？</a>
            </label>
          </li>
        </ul>
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
        // 验证码
        showCode: false,
        // 用户名密码验证码
        userName: 'heishou1',
        userPwd: 'heishou0911',
        code: '1234',
        verify: 'http://localhost:8080/admin/verify.img'
      }
    },
    methods: {
      dragBefore () {
        console.info('before')
        // return false
      },
      dragStop () {
        let self = this
        setTimeout(() => {
          self.showCode = true
        }, 2000)
      },
      forgetPasswordClick () {
        this.$MyAlert.show({
          type: 'hits',
          message: '请联系管理员！',
          timeout: -1,
          closeAfter () {
            self.loading = false
          }
        })
      },
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
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #90a2bc;
    opacity:1; 
  }
  
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #90a2bc;
    opacity:1;
  }
  
  input:-ms-input-placeholder{
    color: #90a2bc;
    opacity:1;
  }
  
  input::-webkit-input-placeholder{
    color: #90a2bc;;
    opacity:1;
  }
  .login {
    width: inherit;
    height: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: rgb(28, 119, 172) url(/static/imgs/login/loginbg3.png) no-repeat center center;
    .login-box {
      overflow: hidden;
      z-index: 2;
      .box-logo {
        height: 71px;
        margin: 20px auto;
        display: table;
        text-align: center;
      }
      .box-form {
        width: 692px;
        height: 373px;
        margin-top: 30px;
        background: url(/static/imgs/login/logininfo3.png) no-repeat;
        padding-left: 285px;
        > ul {
          margin-top: 88px;
          display: inline-block;
          width: 343px;
          > li {
            margin-bottom: 16px;
            .form-user,
            .form-pwd {
              width: 100%;
              height: 48px;
              border: none;
              line-height: 48px;
              padding-left: 44px;
              font-size: 14px;
              font-weight: bold;
            }
            .form-user {
              background: url(/static/imgs/login/loginuser.png) no-repeat;
            }
            .form-pwd {
              background: url(/static/imgs/login/loginpassword.png) no-repeat;
            }
            &.form-code {
              width: 341px;
              height: 46px;
              background: url(/static/imgs/login/yzmbg.png) no-repeat;
              padding-bottom: 5px;
              :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: #cee4f1;
                opacity:1; 
              }
              
              ::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #cee4f1;
                opacity:1;
              }
              
              input:-ms-input-placeholder{
                color: #cee4f1;
                opacity:1;
              }
              
              input::-webkit-input-placeholder{
                //color: #cee4f1;
                color: #cee4f1;;
                opacity:1;
              }
              > span {
                display: block;
                float: left;
                width: 227px;
                height: 46px;
                > input {
                  background: none;
                  border: none;
                  width: 183px;
                  height: 46px;
                  line-height: 46px;
                  padding-left: 44px;
                  font-size: 14px;
                  color: #cee4f1;
                }
              }
              > img {
                display: inline-block;
                width: 113px;
                height: 46px;
              }
            }
            &.form-button {
              [type="submit"] {
                border: none;
                width: 111px;
                height: 35px;
                background: url(/static/imgs/login/buttonbg.png) repeat-x;
                font-size: 14px;
                font-weight: bold;
                color: #fff;
                cursor: pointer;
                line-height: 35px;
              }
              > label {
                color: #687f92;
                padding-left: 25px;
                padding-top: 7px;
                > a {
                  color: #687f92;
                  font-size: 12px;
                  &:hover {
                    color: #3d96c9;
                  }
                }
              }
            }
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
      animation: horizontalLoop 50s linear infinite;
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