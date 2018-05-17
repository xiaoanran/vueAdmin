<template>
  <ul class="my-password-strong inline-block" :class="level">
    <li class="error">非法</li>
    <li class="danger">弱</li>
    <li class="general">中</li>
    <li class="safe">高</li>
  </ul>
</template>

<script>
  export default {
    name: 'my-password-strong',
    props: ['value'],
    computed: {
      level () {
        let result = 0
        if (!/^[a-zA-Z]\w{7,15}$/.test(this.value)) {
          return 'error'
        }
        let number = /\d+/
        let lowerLetter = /[a-z]+/
        let upperLetter = /[A-Z]+/
        let underline = /_+/
        if (number.test(this.value)) {
          result += 1
        }
        if (lowerLetter.test(this.value)) {
          result += 1
        }
        if (upperLetter.test(this.value)) {
          result += 1
        }
        if (underline.test(this.value)) {
          result += 1
        }
        if (this.value.length > 14) {
          result += 1
        }
        if (result === 1 || result === 2) {
          return 'danger'
        } else if (result === 3 || result === 4) {
          return 'general'
        } else if (result === 5) {
          return 'safe'
        } else {
          return 'error'
        }
      }
    }
  }
</script>

<style>
</style>