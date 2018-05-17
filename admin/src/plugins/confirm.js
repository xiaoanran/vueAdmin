import Confirm from '@/components/module/confirm'

let $vm
export default {
  install (Vue, options) {
    const ConfirmPlugin = Vue.extend(Confirm)
    const config = {
      show (option) {
        if (!$vm) {
          if (!option) {
            option = {}
          }
          option.show = true
          const propsData = Object.assign({}, option)
          $vm = new ConfirmPlugin({
            propsData,
            el: document.createElement('div')
          })
          document.body.appendChild($vm.$el)
        } else {
          $vm.show = true
          $vm = Object.assign($vm, option)
        }
      },
      hide () {
        $vm.show = false
      }
    }
    if (!Vue.$MyConfirm) {
      Vue.prototype.$MyConfirm = config
    }
  }
}
