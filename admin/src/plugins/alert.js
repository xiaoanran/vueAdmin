import Alert from '@/components/module/alert'

let $vm
export default {
  install (Vue, options) {
    const AlertPlugin = Vue.extend(Alert)
    const config = {
      show (option) {
        if (!$vm) {
          if (!option) {
            option = {}
          }
          option.show = true
          const propsData = Object.assign({}, option)
          $vm = new AlertPlugin({
            propsData,
            el: document.createElement('div')
          })
          document.body.appendChild($vm.$el)
        } else {
          if ($vm.out) {
            clearTimeout($vm.out)
          }
          $vm.show = true
          $vm = Object.assign($vm, option)
        }
      },
      hide () {
        $vm.show = false
      }
    }
    if (!Vue.$MyAlert) {
      Vue.prototype.$MyAlert = config
    }
  }
}
