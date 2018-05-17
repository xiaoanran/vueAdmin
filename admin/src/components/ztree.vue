<template>
  <div>
    <ul class="ztree" id="zTree"></ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import 'zTree'
  import 'ztree/css/zTreeStyle/zTreeStyle.css'
  
  export default {
    name: 'ztree',
    data () {
      return {
        // 设置
        setting: {
          data: {
            simpleData: {
              enable: true
            }
          }
        },
        zNodes: [
          {id: 1, pId: 0, name: '节点1'},
          {id: 11, pId: 1, name: '子节点1'},
          {id: 12, pId: 1, name: '子节点2'}
        ]
      }
    },
    mounted () {
      $.fn.zTree.init($('#zTree'), this.setting, this.zNodes)
    }
  }
</script>

<style lang="less">
</style>