<template>
  <div class="my-mask" :class="{opacity: backdrop}" v-if="show">
    <div class="my-modal" ref="modal">
      <div class="modal-head" unselectable="on">
        <span class="head-title">{{title}}</span>
        <span class="head-close" @click="modalCloseClick"></span>
      </div>
      <div class="modal-body" :class="{footer: footer}">
        <div class="loading" v-if="loading"></div>
        <slot></slot>
      </div>
      <div class="modal-btn">
        <input class="ok" type="button" value="确定"  @click="okClick"/>
        <input class="cancel" type="button" value="取消" @click="cancelClick"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-modal',
    model: {
      prop: 'show',
      event: 'change'
    },
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
          return '弹出层'
        }
      },
      footer: {
        type: Boolean,
        default () {
          return true
        }
      },
      loading: {
        type: Boolean,
        default () {
          return true
        }
      },
      backdrop: {
        type: Boolean,
        default () {
          return false
        }
      },
      ok: Function,
      cancel: Function,
      showAfter: Function,
      closeBefore: Function,
      closeAfter: Function
    },
    watch: {
      show (value) {
        if (value) {
          if (this.showAfter) {
            this.showAfter(this)
          }
        } else {
          if (this.closeAfter) {
            this.closeAfter(this)
          }
        }
      }
    },
    methods: {
      modalCloseClick () {
        if (this.closeBefore) {
          this.closeBefore(this)
        }
      },
      okClick () {
        if (this.ok) {
          this.ok(this)
        }
      },
      cancelClick () {
        if (this.cancel) {
          this.cancel(this)
        }
      }
    }
  }
</script>

<style>
</style>