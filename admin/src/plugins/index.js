import Axios from '@/plugins/myaxios'
import alert from '@/plugins/alert'
import mask from '@/plugins/mask'
import confirm from '@/plugins/confirm'
import verify from '@/plugins/verify'
import utils from '@/mixin'

import MyForm from '@/components/module/form'
import MyFormGroup from '@/components/module/form-group'
import MyFormGroupItem from '@/components/module/form-group-item'
import MyCheckbox from '@/components/module/checkbox'
import MyRadio from '@/components/module/radio'
import MyModal from '@/components/module/modal'
import MySelect from '@/components/module/select'
import MyOption from '@/components/module/option'
import MyGroupOption from '@/components/module/group-option'
import MyStepInput from '@/components/module/step-input'
import MyPaging from '@/components/module/paging'
import MyPasswordStrong from '@/components/module/password-strong'
import MyFileUpload from '@/components/module/file-upload'
import MyImgUpload from '@/components/module/img-upload'
import MyProgress from '@/components/module/progress'
import MyMask from '@/components/module/mask'
import MyPanel from '@/components/module/panel'
import MyTab from '@/components/module/tab'
import MyTabPanel from '@/components/module/tabPanel'
import MyTable from '@/components/module/table'
import MyTableThead from '@/components/module/table-thead'
import MyTableTbody from '@/components/module/table-tbody'
import MyTableTfoot from '@/components/module/table-tfoot'
import MySwitch from '@/components/module/switch'
import MySlider from '@/components/module/slider'
import MyTag from '@/components/module/tag'
import MyMsgs from '@/components/module/msgs'
import MySlidingValidate from '@/components/module/sliding-validate'
import MyInput from '@/components/module/input'

// 插件封装
export default {
  install: function (Vue, Option) {
    Vue.use(Axios)
    Vue.use(alert)
    Vue.use(mask)
    Vue.use(confirm)
    Vue.use(verify)
    Vue.component(MyForm.name, MyForm)
    Vue.component(MyFormGroup.name, MyFormGroup)
    Vue.component(MyFormGroupItem.name, MyFormGroupItem)
    Vue.component(MyCheckbox.name, MyCheckbox)
    Vue.component(MyRadio.name, MyRadio)
    Vue.component(MyModal.name, MyModal)
    Vue.component(MySelect.name, MySelect)
    Vue.component(MyOption.name, MyOption)
    Vue.component(MyGroupOption.name, MyGroupOption)
    Vue.component(MyStepInput.name, MyStepInput)
    Vue.component(MyPaging.name, MyPaging)
    Vue.component(MyPasswordStrong.name, MyPasswordStrong)
    Vue.component(MyFileUpload.name, MyFileUpload)
    Vue.component(MyImgUpload.name, MyImgUpload)
    Vue.component(MyProgress.name, MyProgress)
    Vue.component(MyMask.name, MyMask)
    Vue.component(MyPanel.name, MyPanel)
    Vue.component(MyTab.name, MyTab)
    Vue.component(MyTabPanel.name, MyTabPanel)
    Vue.component(MyTable.name, MyTable)
    Vue.component(MyTableThead.name, MyTableThead)
    Vue.component(MyTableTbody.name, MyTableTbody)
    Vue.component(MyTableTfoot.name, MyTableTfoot)
    Vue.component(MySwitch.name, MySwitch)
    Vue.component(MySlider.name, MySlider)
    Vue.component(MyTag.name, MyTag)
    Vue.component(MyMsgs.name, MyMsgs)
    Vue.component(MySlidingValidate.name, MySlidingValidate)
    Vue.component(MyInput.name, MyInput)
    Vue.prototype.$utils = utils
  }
}
