// 浏览器相关
const BROWSER = {
  /**
   * ie版本
   */
  ieVersion () {
    let ie = !!window.ActiveXObject
    let ie6 = ie && !window.XMLHttpRequest
    let ie8 = ie && !!document.documentMode
    let ie7 = ie && !ie6 && !ie8
    if (ie) {
      if (ie6) {
        return 6
      } else if (ie8) {
        return 7
      } else if (ie7) {
        return 8
      }
    }
  },
  /**
   * 是否支持html5
   */
  supportHtml5 () {
    return typeof (Worker) !== 'undefined' ? 1 : 0
  },
  /**
   * 获取网址参数值
   * @param {参数名称} paraName
   */
  getUrlPara (paraName) {
    let strHref = location.href
    let intPos = strHref.indexOf('?')
    let strRight = strHref.substr(intPos + 1)
    let arrTmp = strRight.split('&')
    for (let i = 0; i < arrTmp.length; i++) {
      let arrresult = arrTmp[i].split('=')
      if (arrresult[0].toUpperCase() === paraName.toUpperCase()) {
        return decodeURI(arrresult[1])
      }
    }
    return null
  },
  /**
   * 编码url
   * @param {网址} str
   */
  encodeURI (str) {
    return encodeURI(str)
  },
  /**
   * 解码url
   * @param {网址} str
   */
  decodeURI (str) {
    return decodeURI(str)
  },
  /**
   * 获取useragent
   */
  getUseragent () {
    return navigator.userAgent
  },
  /**
   * 获取cookie
   * @param {cookie名称} name
   */
  getCookie (name) {
    let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    return arr != null ? unescape(arr[2]) : undefined
  },
  /**
   * 设置cookie
   * @param {名字} name
   * @param {值} value
   * @param {过期时间} expiredays
   */
  setCookie (name, value, expiredays) {
    let exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  /**
   * 删除cookie
   * @param {名称} name
   */
  deleteCookie (name) {
    let cval = this.getCookie(name)
    let exp = new Date()

    exp.setTime(exp.getTime() - 1)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
}

export default {
  ...BROWSER
}
