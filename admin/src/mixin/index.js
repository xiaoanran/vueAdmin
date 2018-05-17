import CALC from '@/mixin/calc'
import BROWSER from '@/mixin/browser'
import TIME from '@/mixin/time'
import STRING from '@/mixin/string'

export default {
  ...CALC,
  ...BROWSER,
  ...TIME,
  ...STRING
}
