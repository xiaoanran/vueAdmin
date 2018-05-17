<template>
  <div v-if="this.$parent.value === flag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-tab-panel',
  props: {
    // panel标题
    label: String,
    // panel标记
    flag: String
  },
  mounted () {
    this.$parent.heads.push({
      label: this.label,
      flag: this.flag
    })
  }
}
</script>

<style>
</style>