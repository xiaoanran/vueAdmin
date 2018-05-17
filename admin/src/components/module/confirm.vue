<template>
  <div class="my-mask" :class="{opacity: backdrop}" v-if="show">
    <div class="my-confirm" ref="confirm">
      <div class="confirm-head">
        <span class="head-title">{{title}}</span>
        <span class="head-close"  @click="cancelClick"></span>
      </div>
      <div class="confirm-body">
        <div class="body-info">
          <span class="info-img">
            <img src="/static/imgs/module/confirm/ticon.png"/>
          </span>
          <div class="info-right text-left">
            <p>{{message}}</p>
            <cite>如果是请点击确定按钮 ，否则请点取消。</cite>
          </div>
        </div>
        <div class="body-btn">
          <input class="ok" type="button" value="确定"  @click="okClick"/>
          <input class="cancel" type="button" value="取消" @click="cancelClick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-confirm',
    props: {
      show: {
        type: Boolean,
        default () {
          return false
        }
      },
      title: {
        type: String,
        default () {
          return '确认？'
        }
      },
      message: {
        type: String,
        default () {
          return '确认执行改操作吗？'
        }
      },
      backdrop: {
        type: Boolean,
        default () {
          return false
        }
      },
      ok: Function,
      cancel: Function
    },
    methods: {
      okClick () {
        if (this.ok) {
          this.ok(this)
        }
      },
      cancelClick () {
        if (this.cancel) {
          if (this.cancel(this)) {
            this.$MyConfirm.hide()
          }
        } else {
          this.$MyConfirm.hide()
        }
      }
    }
  }
</script>

<style>
</style>