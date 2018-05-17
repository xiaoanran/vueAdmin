<template>
  <div class="my-step-input" :class="{disabled: disabled}">
    <input class="my-text bg" :class="{disabled: disabled}" type="text" :value="value" readonly>
    <span class="input-up" title="增加" @click="upClick"></span>
    <span class="input-down" title="减少" @click="downClick"></span>
  </div>
</template>

<script>
  export default {
    name: 'my-step-input',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: Number,
        default () {
          return 0
        }
      },
      disabled: {
        type: Boolean,
        default () {
          return false
        }
      },
      step: {
        type: Number,
        default () {
          return 1
        }
      },
      min: {
        type: Number,
        default () {
          return 0
        }
      },
      max: {
        type: Number,
        default () {
          return 100
        }
      },
      clickBefore: Function,
      clickAfter: Function
    },
    watch: {
      value (curr, old) {
        if (curr !== old) {
          if (this.clickAfter) {
            this.clickAfter(curr, old, this)
          }
        }
      }
    },
    methods: {
      upClick () {
        if (this.clickBefore) {
          if (!this.clickBefore(this)) {
            return false
          }
        }
        let result = this.$utils.addition(this.value, this.step)
        if (result <= this.max) {
          this.$emit('change', result)
        }
      },
      downClick () {
        if (this.clickBefore) {
          if (!this.clickBefore(this)) {
            return false
          }
        }
        let result = this.$utils.subtraction(this.value, this.step)
        if (result >= this.min) {
          this.$emit('change', result)
        }
      }
    }
  }
</script>

<style>
</style>