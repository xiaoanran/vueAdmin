export default {
  install (Vue, options) {
    Vue.directive('drag', {
      bind (el, binding, vnode) {
        let self = this
        // 鼠标按下
        el.onmousedown = (e) => {
          // 计算当前鼠标距离拖动元素的边缘距离
          let x = e.pageX - el.offsetLeft
          lef y = e.pageY - el.offsetTop
          // 鼠标移动
          el.onmousemove = () => {
            // 通过保存的鼠标和拖动元素的边缘距离计算出鼠标实际移动距离
          }
        }
      }
    })
  }
}