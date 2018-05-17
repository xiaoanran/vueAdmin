const TIME = {
  /**
   * 距离今天的某一天
   * @param {某一天} value
   */
  getDay (value) {
    let result = new Date()
    result.setDate(result.getDate() + value)
    return result
  },
  /**
   * 之前几天开始结束时间
   * @param {之前几天} value
   */
  getLately (value) {
    let result = {}
    let temp = new Date()

    if (value <= 1) {
      console.error('getLately方法参数value必须 > 1')
      return undefined
    }
    result.start = new Date(temp.setDate(temp.getDate() - value))
    result.end = new Date(temp.setDate(temp.getDate() + (value - 1)))
    return result
  },
  /**
   * 之前几天时间列表
   * @param {之前几天} value
   */
  getLatelyList (value) {
    let result = []
    let temp = new Date()

    if (value <= 1) {
      console.error('方法参数value必须 > 1')
      return undefined
    }
    value = Math.abs(value) - 1
    for (var i = value; i >= 0; i--) {
      result[i] = new Date(temp.setDate(temp.getDate() - 1))
    }
    return result
  },
  /**
   * 未来几天开始结束时间
   * @param {未来几天} value
   */
  getFuture (value) {
    let result = {}
    let temp = new Date()

    if (value <= 1 || !value) {
      console.error('参数value必须 > 1')
      return undefined
    }
    value = value - 1
    result.start = new Date(temp.setDate(temp.getDate() + 1))
    result.end = new Date(temp.setDate(temp.getDate() + value))
    return result
  },
  /**
   * 未来几天时间列表
   * @param {未来几天} value
   */
  getFutureList (value) {
    let result = []
    let temp = new Date()

    if (value <= 1 || !value) {
      console.error('方法参数value必须  > 1')
      return undefined
    }
    for (let i = 0; i < value; i++) {
      result[i] = new Date(temp.setDate(temp.getDate() + 1))
    }
    return result
  },
  /**
   * 本周开始结束时间
   */
  getCurrWeek () {
    let temp = new Date()
    let day = temp.getDay()
    let surplus = (day === 0 ? 6 : day - 1)
    let result = {}

    result.start = new Date(temp.setDate(temp.getDate() - surplus))
    result.end = new Date(temp.setDate(temp.getDate() + 6))
    return result
  },
  /**
   * 本周时间列表
   */
  getCurrWeekList () {
    let temp = new Date()
    let day = temp.getDay()
    let surplus = (day === 0 ? 6 : day - 1)
    let result = []

    temp.setDate(temp.getDate() - surplus)
    result[0] = new Date(temp.getTime())
    for (let i = 0; i < 6; i++) {
      result[i + 1] = new Date(temp.setDate(temp.getDate() + 1))
    }
    return result
  },
  /**
   * 上周开始结束时间
   */
  getLastWeek () {
    let temp = new Date()
    let day = temp.getDay()
    let surplus = (day === 0 ? 7 + 6 : day + 6)
    let result = {}

    result.start = new Date(temp.setDate(temp.getDate() - surplus))
    result.end = new Date(temp.setDate(temp.getDate() + 6))
    return result
  },
  /**
   * 上周时间列表
   */
  getLastWeekList () {
    let temp = new Date()
    let day = temp.getDay()
    let surplus = (day === 0 ? 7 + 6 : day + 6)
    let result = []
    temp.setDate(temp.getDate() - surplus)
    result[0] = new Date(temp.getTime())
    for (let i = 0; i < 6; i++) {
      result[i + 1] = new Date(temp.setDate(temp.getDate() + 1))
    }
    return result
  },
  /**
   * 下周开始结束时间
   */
  getNextWeek () {
    let temp = new Date()
    let day = temp.getDay()
    let surplus = day === 0 ? 1 : 7 - day + 1
    let result = {}

    result.start = new Date(temp.setDate(temp.getDate() + surplus))
    result.end = new Date(temp.setDate(temp.getDate() + 6))
    return result
  },
  /**
   * 下周时间列表
   */
  getNextWeekList () {
    let temp = new Date()
    let day = temp.getDay()
    let surplus = day === 0 ? 1 : 7 - day + 1
    let result = {}

    temp.setDate(temp.getDate() + surplus)
    result[0] = new Date(temp.getTime())
    for (let i = 0; i < 6; i++) {
      result[i + 1] = new Date(temp.setDate(temp.getDate() + 1))
    }
    return result
  },
  /**
   * 该月开始时间结束时间
   * @param {日期} value
   */
  getMonth (value) {
    let temp = new Date(value)
    let result = {}

    if (!value) {
      temp = new Date()
    }
    result.start = new Date(temp.setDate(1))
    result.end = new Date(temp.getFullYear(), temp.getMonth() + 1, 0)
    return result
  },
  /**
   * 该月时间列表
   * @param {日期} value
   */
  getMonthList (value) {
    let temp = new Date(value)
    let result = []
    let day = null

    if (!value) {
      temp = new Date()
    }
    temp = new Date(temp.getFullYear(), temp.getMonth() + 1, 0)
    day = temp.getDate()
    for (let i = 0; i < day; i++) {
      if (i === 0) {
        result[day - 1] = new Date(temp)
      } else {
        result[i - 1] = new Date(temp.setDate(i))
      }
    }
    return result
  },
  /**
   * 该月有多少天
   * @param {日期} value
   */
  getMonthTotalDays (value) {
    let temp = new Date(value)

    if (!value) {
      temp = new Date()
    }

    return new Date(temp.getFullYear(), temp.getMonth() + 1, 0).getDate()
  },
  /**
   * 本季度
   */
  getCurrQuarter () {
    let temp = new Date()
    let month = temp.getMonth() + 1
    let result = {}

    if (month >= 1 && month <= 3) {
      result.start = new Date(temp.getFullYear(), 0, 1)
      result.end = new Date(temp.getFullYear(), 3, 0)
    } else if (month >= 4 && month <= 6) {
      result.start = new Date(temp.getFullYear(), 3, 1)
      result.end = new Date(temp.getFullYear(), 6, 0)
    } else if (month >= 7 && month <= 9) {
      result.start = new Date(temp.getFullYear(), 6, 1)
      result.end = new Date(temp.getFullYear(), 9, 0)
    } else if (month >= 10 && month <= 12) {
      result.start = new Date(temp.getFullYear(), 9, 1)
      result.end = new Date(temp.getFullYear(), 12, 0)
    } else {}
    return result
  },
  /**
   * 上个季度
   */
  getLastQuarter () {
    let temp = new Date()
    let month = temp.getMonth() + 1
    let result = {}

    if (month >= 1 && month <= 3) {
      result.start = new Date(temp.getFullYear(), 9, 1)
      result.end = new Date(temp.getFullYear(), 12, 0)
    } else if (month >= 4 && month <= 6) {
      result.start = new Date(temp.getFullYear(), 0, 1)
      result.end = new Date(temp.getFullYear(), 3, 0)
    } else if (month >= 7 && month <= 9) {
      result.start = new Date(temp.getFullYear(), 3, 1)
      result.end = new Date(temp.getFullYear(), 6, 0)
    } else if (month >= 10 && month <= 12) {
      result.start = new Date(temp.getFullYear(), 6, 1)
      result.end = new Date(temp.getFullYear(), 9, 0)
    } else {}
    return result
  },
  /**
   * 下个季度
   */
  getNextQuarter () {
    let temp = new Date()
    let month = temp.getMonth() + 1
    let result = {}

    if (month >= 1 && month <= 3) {
      result.start = new Date(temp.getFullYear(), 3, 1)
      result.end = new Date(temp.getFullYear(), 6, 0)
    } else if (month >= 4 && month <= 6) {
      result.start = new Date(temp.getFullYear(), 6, 1)
      result.end = new Date(temp.getFullYear(), 9, 0)
    } else if (month >= 7 && month <= 9) {
      result.start = new Date(temp.getFullYear(), 9, 1)
      result.end = new Date(temp.getFullYear(), 12, 0)
    } else if (month >= 10 && month <= 12) {
      result.start = new Date(temp.getFullYear(), 0, 1)
      result.end = new Date(temp.getFullYear(), 3, 0)
    } else {}
    return result
  },
  /**
   * 该日期是今年的第多少天
   * @param {日期} value
   */
  getCurrDayforCurrYear (value) {
    let temp = null
    let result = {}

    if (value) {
      temp = new Date(value)
    } else {
      temp = new Date()
    }
    result.diff = temp.getTime() - new Date(temp.getFullYear(), 0, 1).getTime()
    result.days = Math.floor(result.diff / (1000 * 60 * 60 * 24))
    return result
  },
  /**
   * 时间间隔
   * @param {开始时间} start
   * @param {结束时间} end
   */
  getDateDiff (start, end) {
    if (!start && !end) {
      console.error('请传递开始时间和结束时间，开始时间必须，结束时间默认今天')
      return undefined
    }
    let startTemp = new Date(start)
    let endTemp = end ? new Date(end) : new Date()
    let diff = endTemp.getTime() - startTemp.getTime()
    let result = {
      diff: diff
    }
    let temp = null

    result.year = endTemp.getFullYear() - startTemp.getFullYear()
    temp = diff / (1000 * 60 * 60 * 24)
    result.days = Math.floor(temp)
    temp = diff % (1000 * 60 * 60 * 24)
    result.hour = Math.floor(temp / (1000 * 60 * 60))
    temp = temp % (1000 * 60 * 60)
    result.minute = Math.floor(temp / (1000 * 60))
    temp = temp % (1000 * 60)
    result.second = Math.floor(temp / 1000)
    return result
  },
  /**
   * 判断是否是闰年
   * @param {日期yyyy} value
   */
  isLeapYr (value) {
    return (value % 4 === 0 && value % 100 !== 0) || (value % 100 === 0 && value % 400 === 0)
  },
  /**
   * 秒转化为hhmmss
   * @param {时间} time
   */
  secondToHHMMSS (time) {
    let result = 'hh:mm:ss'
    let temp = null
    let hour = null
    let minute = null
    let second = null
    hour = this.String.returnDouble(Math.floor(time / (60 * 60)))
    temp = time % (60 * 60)
    minute = this.String.returnDouble(Math.floor(temp / 60))
    temp = temp % 60
    second = this.String.returnDouble(temp)
    result = result.replace(/hh/, hour)
    result = result.replace(/mm/, minute)
    result = result.replace(/ss/, second)
    return result
  },
  /**
   * 倒计时
   * @param {时间(秒)} time
   * @param {倒计时执行以前} before
   * @param {倒计时要做的事情} doThing
   * @param {结束以后} finish
   */
  countDown (time, before, doThing, finish) {
    let timer = null
    let str = null
    if (typeof before === 'function') {
      if (before() === false) {
        return
      }
    }
    timer = setInterval(() => {
      time = time - 1
      str = this.Time.secondToHHMMSS(time)
      if (typeof finish === 'function') {
        if (time <= 0) {
          clearInterval(timer)
          finish()
          return
        }
      }
      if (typeof doThing === 'function') {
        doThing(str, timer, time)
      }
    }, 1000)
  },
  /**
   * 正常计时
   * @param {计时开始以前} before
   * @param {计时要做的事情} doThing
   */
  timekeeping (before, doThing) {
    let time = 0
    let str = null
    let timer = null
    if (typeof before === 'function') {
      if (before() === false) {
        return
      }
    }
    timer = setInterval(() => {
      time = time + 1
      str = this.Time.secondToHHMMSS(time)
      if (typeof doThing === 'function') {
        doThing(str, timer, time)
      }
    }, 1000)
  },
  format (fmt) {
    let temp = new Date(fmt)
    let o = {
      'M+': temp.getMonth() + 1,
      'd+': temp.getDate(),
      'h+': temp.getHours(),
      'm+': temp.getMinutes(),
      's+': temp.getSeconds(),
      'q+': Math.floor((temp.getMonth() + 3) / 3),
      'S': temp.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (temp.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }
}

export default {
  ...TIME
}
