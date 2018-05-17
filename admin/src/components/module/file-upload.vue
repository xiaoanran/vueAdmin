<template>
  <div class="my-file-upload my-text long">
    <span>{{file}}</span>
    <button ref="upload" class="upload-button" title="选择文件">浏览..</button>
  </div>
</template>

<script>
export default {
  name: 'my-file-upload',
  model: {
    prop: 'file',
    event: 'upload'
  },
  data () {
    return {
      // 当前进度
      progress: '0%'
    }
  },
  props: {
    file: String,
    init: Function
  },
  mounted () {
    this.self = this
    if (this.init) {
      this.init(this.self)
    }
  }
}
</script>

<style>
</style>