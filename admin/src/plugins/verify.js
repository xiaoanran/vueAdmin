// import String from '@/mixin/string'
import Msgs from '@/components/module/msgs'
/**
 * 缓存一些数据
 */
let datas = []
/**
 * 正则列表
 */
let regList = {
  // 身份证
  idcard: '(^\\d{15}$)|(^\\d{17}([0-9]|X)$)',
  // 邮箱
  email: '^([a-z0-9_\\.-]+)@[a-z0-9_\\.-]+(\\.{1,2}[a-z]+)+$',
  // 手机
  mobile: '^1[3|4|5|7|8]\\d{9}$',
  // 电话
  tel: '^([0-9]{3,4}-)[0-9]{8}$|^(([0-9]{3}-){2})[0-9]{4}$',
  // 数字
  number: '^[\\d-]+(\\.\\d+)?$',
  // 日期
  date: '^[1|2]\\d{3}-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])$',
  // 时间
  time: '^[0-2][0-3](:[0-5]\\d){1,2}$',
  // 日期时间
  datetime: '^[1|2]\\d{3}-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1]) [0-2][0-3](:[0-5]\\d){1,2}$',
  // 网址
  url: '(http|ftp|https):\\/\\/([\\w-]+\\.)+',
  // 整数/正整数
  digits: '^\\d+$',
  // 邮编
  zip: '^[1-9][0-9]{5}$',
  // 密码
  password: '^[a-zA-Z]\\w{7,15}$',
  /**
   * 中文
   */
  chinese: '^[\\u2E80-\\u9FFF]+$'
}

/**
 * 当前正则
 */
let reg = null

// 规则列表
let ruleList = {
  /**
   * 必填 包括null undefined ''
   */
  required (value) {
    if (value instanceof Array) {
      return value.length > 0
    }
    return !!value
  },
  /**
   * 身份证
   */
  idcard (value) {
    reg = new RegExp(regList.idcard)
    return reg.test(value)
  },
  /**
   * 电子邮箱
   */
  email (value) {
    reg = new RegExp(regList.email)
    return reg.test(value)
  },
  /**
   * 手机
   */
  mobile (value) {
    reg = new RegExp(regList.mobile)
    return reg.test(value)
  },
  /**
   * 数字
   */
  number (value) {
    reg = new RegExp(regList.number)
    return reg.test(value)
  },
  /**
   * 日期
   */
  date (value) {
    reg = new RegExp(regList.date)
    return reg.test(value)
  },
  /**
   * 时间 xx:xx:xx xx:xx
   */
  time (value) {
    reg = new RegExp(regList.time)
    return reg.test(value)
  },
  /**
   * 日期时间
   */
  datetime (value) {
    reg = new RegExp(regList.datetime)
    return reg.test(value)
  },
  /**
   * 网址
   */
  url (value) {
    reg = new RegExp(regList.url)
    return reg.test(value)
  },
  /**
   * 整数
   */
  digits (value) {
    reg = new RegExp(regList.digits)
    return reg.test(value)
  },
  /**
   * 邮编
   */
  zip (value) {
    reg = new RegExp(regList.zip)
    return reg.test(value)
  },
  /**
   * 密码
   */
  password (value) {
    reg = new RegExp(regList.password)
    return reg.test(value)
  },
  /**
   * 中文
   */
  chinese (value) {
    reg = new RegExp(regList.chinese)
    return reg.test(value)
  },
  /**
   * 两个值匹配
   */
  match (value1, value2) {
    return value1.toString() === value2.toString()
  },
  /**
   * 大于
   */
  gt (limit, value) {
    return value > limit
  },
  /**
   * 大于等于
   */
  gtEqual (limit, value) {
    return value >= limit
  },
  /**
   * 小于
   */
  lt (limit, value) {
    return value < limit
  },
   /**
   * 小于等于
   */
  ltEqual (limit, value) {
    return value <= limit
  },
  /**
   * 大于小于
   */
  gtlt (min, max, value) {
    return value > min && value < max
  },
  /**
   * 大于等于小于等于
   */
  gtltEqual (min, max, value) {
    return value >= min && value <= max
  }
}

/**
 * 单独验证
 */
let checkAlone = function (el, binding, vnode, type) {
  let rules = !binding.arg ? [] : binding.arg.split(':')
  let value = type ? el.value : binding.value
  let result = false
  rules.forEach(function (tag, index) {
    switch (tag) {
      case 'required': result = ruleList.required(value); break
      case 'idcard': result = ruleList.idcard(value); break
      case 'email': result = ruleList.email(value); break
      case 'mobile': result = ruleList.mobile(value); break
      case 'number': result = ruleList.number(value); break
      case 'date': result = ruleList.date(value); break
      case 'time': result = ruleList.time(value); break
      case 'datetime': result = ruleList.datetime(value); break
      case 'url': result = ruleList.url(value); break
      case 'digits': result = ruleList.digits(value); break
      case 'zip': result = ruleList.zip(value); break
      case 'password': result = ruleList.password(value); break
      case 'chinese': result = ruleList.chinese(value); break
      case 'match': result = ruleList.match(value); break
      case 'gt': result = ruleList.gt(el.dataset.limit, value); break
      case 'gtEqual': result = ruleList.gtEqual(el.dataset.limit, value); break
      case 'lt': result = ruleList.lt(el.dataset.limit, value); break
      case 'ltEqual': result = ruleList.ltEqual(el.dataset.limit, value); break
      case 'gtlt': result = ruleList.gtlt(el.dataset.min, el.dataset.max, value); break
      case 'gtltEqual': result = ruleList.gtltEqual(el.dataset.min, el.dataset.max, value); break
    }
    if (result) {
      success(el, binding, vnode)
    } else {
      fail(el, binding, vnode)
    }
  })
}

/**
 * 验证通过
 */
let success = function (el, binding, vnode) {
  el.parentNode.classList.remove('error')
  let uid = el.dataset.uid
  let $vm = datas.find((n) => n.name.toString() === uid)
  if ($vm) {
    $vm.value.show = false
    datas.find((n) => n.name.toString() === uid).value = $vm.value
  }
}

/**
 * 验证失败
 */
let fail = function (el, binding, vnode) {
  el.parentNode.classList.add('error')
  let error = el.dataset.error ? el.dataset.error : '验证失败!'
  let option = {
    type: 'error',
    text: error,
    hasClose: false,
    show: true
  }
  let propsData = Object.assign({}, option)
  let uid = el.dataset.uid
  let $vm = datas.find((n) => n.name.toString() === uid)
  if (!$vm) {
    $vm = new MsgsPlugin({
      propsData,
      el: document.createElement('div')
    })
    el.parentNode.appendChild($vm.$el)
    datas.push({
      name: $vm._uid,
      value: $vm
    })
    el.dataset.uid = $vm._uid
  } else {
    // $vm.value.show = true
    // $vm.value.text = error
    $vm = Object.assign($vm.value, option)
    datas.find((n) => n.name.toString() === uid).value = $vm
    // el.parentNode.classList.remove('error')
  }
}

// 方法合集
let methods = {
  // 获取父级(多级)某一组件
  closest (vnode, selector) {
    let $p = vnode.componentInstance
    while ($p) {
      if ($p.$parent.$vnode.tag.toLocaleLowerCase().endsWith(selector)) {
        return $p.$parent
      } else {
        $p = $p.$parent
      }
    }
  }
}

/**
 * 创建一个验证实例
 */
let newInstance = function (el, binding, vnode) {
  if (vnode.instance) {
    return vnode.instance
  } else {
    let vm = {
      // 验证规则
      rule: binding.arg.split(':'),
      // 触发方式(失去焦点/值改变
      trigger: el.dataset.trigger,
      // 对应的表单
      form: methods.closest(vnode, 'my-form'),
      // 分组
      group: el.dataset.group
    }
    vnode.instance = vm
    return vm
  }
}

/**
 * 初始化
 */
let init = function (el, binding, vnode) {
  let trigger = vnode.instance.trigger
  let form = vnode.instance.form
  console.info(vnode.instance)
  // 触发方式
  if (trigger === 'submit') {
    // 提交按钮
    if (!form.$vnode.list) {
      form.$vnode.list = []
    }
    form.$vnode.list.push(vnode)
  } else if (trigger === 'watch') {
    // vue响应式
    vnode.context.$watch(binding.expression, (newValue, oldValue) => {
      checkAlone(el, binding, vnode, true)
    })
  } else {
    // 原生事件
    el.addEventListener(trigger, function () {
      checkAlone(el, binding, vnode, true)
    })
  }
}

/**
 * 消息
 */
let MsgsPlugin = null
export default {
  install: function (Vue, Option) {
    MsgsPlugin = Vue.extend(Msgs)
    Vue.directive('verify', {
      bind (el, binding, vnode) {
        // 创建一个实例
        newInstance(el, binding, vnode)
        // 一些初始化信息
        init(el, binding, vnode)
      }
    })
  }
}
