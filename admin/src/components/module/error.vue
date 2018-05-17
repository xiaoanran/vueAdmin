<template>
  <div class="my-error" :class="'e' + code">
      <h2 v-if="code === '404'">非常遗憾，您访问的页面不存在！</h2>
      <h2 v-if="code === '500'">非常遗憾，服务器出错！</h2>
      <p>看到这个提示，就自认倒霉吧!</p>
      <div class="reindex">
        <a class="my-button button-blue" href="/">返回首页</a>
      </div>
   </div>
</template>

<script>
  export default {
    name: 'error',
    props: ['code']
  }
</script>

<style lang="less">
</style>