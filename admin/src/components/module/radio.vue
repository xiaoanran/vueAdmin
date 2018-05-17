<template>
  <label class="my-radio clear" :class="{checked: checked == value , disabled: disabled}">
    <a href="javascript:"></a>
    <span>{{text}}</span>
    <input type="radio" :value="value" :checked="checked == value" :disabled="disabled" @change="radioChange">
  </label>
</template>

<script>
  export default {
    name: 'my-radio',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      value: {
        type: [Number, String],
        required: true
      },
      checked: {
        default: false
      },
      text: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      radioChange (event) {
        this.$emit('change', event.target.value)
      }
    }
  }
</script>

<style>
</style>