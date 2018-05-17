<template>
  <div class="my-img-upload">
    <ul>
      <li class="upload-btn" title="点击上传图片" v-if="showUpload" ref="upload">
        <p class="info" v-if="uploadStatus === 1">上传成功</p>
        <p class="error" v-if="uploadStatus === 2">上传失败</p>
        <p class="progress"><span :style="{width: progress}">{{progress}}</span></p>
      </li>
      <li v-for="img in imgs">
        <img class="img" :src="img"/>
        <div class="handle">
          <i class="iconfont icon-fangdajing mr-xs" title="放大查看" @click="lookImgClick(img)"></i>
          <i class="iconfont icon-shanchu" title="删除图片" @click="deleteImgClick(img)"></i>
        </div>
      </li>
    </ul>
    <!--<div class="wrap">点击上传图片{{maskStatus}}</div> -->
    <my-mask v-model="maskStatus">
      <img :src="currImg" />
    </my-mask>
  </div>
</template>

<script>
export default {
  name: 'my-img-upload',
  model: {
    prop: 'imgs',
    event: 'upload'
  },
  data () {
    return {
      // 上传状态
      uploadStatus: 0,
      // 大图显示状态
      maskStatus: false,
      // 当前查看的图片
      currImg: '',
      // 当前进度
      progress: '0%'
    }
  },
  props: {
    showUpload: {
      type: Boolean,
      default () {
        return true
      }
    },
    imgs: Array,
    deleteImg: Function,
    init: Function
  },
  methods: {
    lookImgClick (img) {
      this.currImg = img
      this.maskStatus = true
    },
    /**
     * 删除图片
     */
    deleteImgClick (img) {
      this.self = this
      if (this.self.imgs.includes(img)) {
        let index = this.imgs.findIndex((n) => n === img)
        this.$emit('upload', this.imgs.splice(index, 1))
      }
      if (this.deleteImg) {
        this.deleteImg(this.self)
      }
    }
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