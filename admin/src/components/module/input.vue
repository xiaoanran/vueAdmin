<template>
  <input class="my-text" :type="type" autocomplete="off" spellcheck="false" :value="value" @input="textInput($event)">
</template>

<script>
export default {
  name: 'my-input',
  model: {
    prop: 'value',
    event: 'input'
  },
  data () {
    return {
    }
  },
  props: {
    value: {
      type: [Number, String],
      default () {
        return ''
      }
    },
    // 输入框类型 目前只有text和password
    type: {
      type: String,
      default () {
        return 'text'
      }
    }
  },
  methods: {
    textInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>
</style>