<template>
  <div class="my-mask" v-if="show">
    <span class="mask-close" title="点击关闭" @click="closeMaskClick">x</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'my-mask',
    model: {
      prop: 'show',
      event: 'change'
    },
    props: {
      show: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    methods: {
      closeMaskClick () {
        this.$emit('change', false)
      }
    }
  }
</script>

<style>
</style>