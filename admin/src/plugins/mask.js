import Mask from '@/components/module/mask'

let $vm

export default {
  install (Vue, options) {
    const MaskPlugin = Vue.extend(Mask)
    const config = {
      show (option) {
        if (!$vm) {
          if (!option) {
            option = {}
          }
          option.show = true
          const propsData = Object.assign({}, option)
          $vm = new MaskPlugin({
            propsData,
            el: document.createElement('div')
          })
          document.body.appendChild($vm.$el)
        } else {
          $vm.show = true
        }
      },
      hide () {
        $vm.show = false
      }
    }
    if (!Vue.$MyMask) {
      Vue.prototype.$MyMask = config
    }
  }
}
