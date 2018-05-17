// 运算
const CALC = {
    /**
   * 浮点数加法运算
   * @param {被加数} augend
   * @param {加数} addend
   */
  addition (augend, addend) {
    let aug = null
    let add = null
    let pow = null
    try {
      aug = augend.toString().split('.')[1].length
    } catch (e) {
      aug = 0
    }

    try {
      add = addend.toString().split('.')[1].length
    } catch (e) {
      add = 0
    }
    pow = Math.pow(10, Math.max(aug, add))
    return (this.multiply(augend, pow) + this.multiply(addend, pow)) / pow
  },
  /**
   * 浮点数运算减法
   * @param {被减数} minuend
   * @param {减数} subtrahend
   */
  subtraction (minuend, subtrahend) {
    let minu = null
    let subt = null
    let pow = null
    try {
      minu = minuend.toString().split('.')[1].length
    } catch (e) {
      minu = 0
    }
    try {
      subt = subtrahend.toString().split('.')[1].length
    } catch (e) {
      subt = 0
    }
    pow = Math.pow(10, Math.max(minu, subt))
    return (this.multiply(minuend, pow) - this.multiply(subtrahend, pow)) / pow
  },
  /**
   * 浮点数运算乘法
   * @param {被乘数} multiplicand
   * @param {乘数} multiplier
   */
  multiply (multiplicand, multiplier) {
    var len = 0
    let multd = multiplicand.toString()
    let multr = multiplier.toString()
    try {
      len += multd.split('.')[1].length
    } catch (e) {}
    try {
      len += multr.split('.')[1].length
    } catch (e) {}
    return Number(multd.replace('.', '')) * Number(multr.replace('.', '')) / Math.pow(10, len)
  },
  /**
   * 浮点数运算除法
   * @param {被除数} dividend
   * @param {除数} divisor
   */
  division (dividend, divisor) {
    let divid = null
    let divir = null
    let dividLen = null
    let divirLen = 0
    try {
      dividLen = dividend.toString().split('.')[1].length
    } catch (e) {}
    try {
      divirLen = divisor.toString().split('.')[1].length
    } catch (e) {}
    divid = Number(dividend.toString().replace('.', ''))
    divir = Number(divisor.toString().replace('.', ''))
    return this.calc.multiply(divid / divir, Math.pow(10, divirLen - dividLen))
  }
}

export default {
  ...CALC
}
