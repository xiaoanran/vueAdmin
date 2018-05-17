<template>
  <div class="my-panel" :class="{tools: showUtils}" v-if="show">
    <div class="panel-head">
      <h1>{{title}}</h1>
      <span class="head-tools" v-if="showUtils">
          <slot name="utils"></slot>
          <!--<a :href="more" class="tools-more">更多</a>-->
         
          <!--<a :href="more" class="tools-more iconfont icon-chakangengduo" title="查看更多"></a>-->
          <!--<a class="tools-refresh iconfont icon-shuaxin" href="javascript:;" title="刷新" @refresh="refreshClick"></a>-->
          <!--<a class="tools-max iconfont icon-fangda" href="javascript:;" title="最大化"></a>
          <a href="javascript:;" class="tools-min iconfont icon-suoxiao" title="最小化"></a>-->
          <a class="tools-close iconfont icon-guanbi" href="javascript:;" title="关闭" @click="closeClick"></a>
      </span>
    </div>
    <div class="panel-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-panel',
  data () {
    return {
      show: true
    }
  },
  props: {
    title: String,
    showUtils: {
      type: Boolean,
      default () {
        return true
      }
    },
    close: Function,
    refresh: Function
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