<template>
  <div class="my-mask" :class="{opacity: backdrop}" v-if="show">
    <div class="my-alert" ref="alert">
      <div class="alert-content">
        <span class="content-clear" v-if="isLoading"></span>
        <span :class="showType"></span>
        {{message}}
        <span class="content-end"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-alert',
    data () {
      return {
        out: null
      }
    },
    props: {
      show: Boolean,
      message: String,
      type: String,
      backdrop: {
        type: Boolean,
        default () {
          return false
        }
      },
      timeout: {
        default () {
          return 2000
        }
      },
      closeAfter: Function
    },
    computed: {
      showType () {
        return 'content-' + this.type
      },
      isLoading () {
        return this.type === 'loading' ? this.type : 'loading'
      }
    },
    mounted () {
      if (this.timeout > 0) {
        this.out = setTimeout(() => {
          this.$MyAlert.hide()
          if (this.closeAfter) {
            this.closeAfter(this)
          }
        }, this.timeout)
      }
    }
  }
</script>

<style>
</style>