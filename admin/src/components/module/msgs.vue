<template>
  <div class="my-msgs" :class="['msg-' + type, 'msg-' + size, (block? 'msg-block': '')]" v-if="show">
      <div class="msg-con" :class="{pr: hasClose}">
        {{text}}
        <a href="javascript:" class="msg-close" v-if="hasClose" @click="closeClick">×</a>
      </div>
      <s class="msg-icon"></s>
  </div>
</template>

<script>
export default {
  name: 'my-msgs',
  data () {
    return {
      show: true
    }
  },
  props: {
    text: {
      type: String,
      default () {
        return ''
      }
    },
    hasClose: {
      type: Boolean,
      default () {
        return true
      }
    },
    type: {
      type: String,
      default () {
        return ''
      }
    },
    size: {
      type: String,
      default () {
        return ''
      }
    },
    block: {
      type: Boolean,
      default () {
        return false
      }
    },
    close: Function
  },
  methods: {
    closeClick () {
      if (this.close) {
        let self = this
        this.close(self)
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style>
</style>