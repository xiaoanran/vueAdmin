<template>
  <div class="my-sliding-validate">
    <div class="validate-yet" :style="{width: buttomX}"></div>
    <span class="validate-button" :class="{ok: success}" :style="{left: buttomX}" @mousedown="buttonMousedown($event)"></span>
    <div class="validate-text">
      <span class="text-yet" v-if="success">验证通过!</span>
      <span class="text-not-yet" v-else>请按住滑块，拖动到最右边</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-sliding-validate',
  data () {
    return {
      isMove: true,
      buttomX: '0px',
      success: false
    }
  },
  props: {
    // 拖动以前
    dragBefore: Function,
    // 拖动中
    dragMove: Function,
    // 拖动结束
    dragStop: Function
  },
  methods: {
    // 鼠标按下
    buttonMousedown (e) {
      if (this.success) {
        return
      }
      let self = this
      // 计算当前鼠标距离拖动元素的边缘距离
      let startX = e.pageX
      // x轴移动最大值
      let maxX = 304
      if (this.dragBefore) {
        if (this.dragBefore(self)) {
          return
        }
      }
      // 鼠标移动
      let currX = 0
      let moveX = 0
      document.onmousemove = (e) => {
        // 当前鼠标X坐标
        currX = e.pageX
        moveX = currX - startX
        if (self.dragMove) {
          self.dragMove(moveX, currX, self)
        }
        if (moveX >= maxX) {
          document.onmousemove = null
          self.success = true
        } else {
          self.buttomX = moveX + 'px'
        }
      }
      // 鼠标放开
      document.onmouseup = (e) => {
        console.info(moveX)
        // 如果没有达到最大值就变为0
        if (moveX < maxX) {
          self.buttomX = '0px'
        } else {
          self.success = true
          if (self.dragStop) {
            self.dragStop(self)
          }
        }
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style>
</style>