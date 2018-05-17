<template>
  <div class="my-progress">
    <div :style="{width: percent}" class="bar">{{percent}}</div>
  </div>
</template>

<script>
export default {
  name: 'my-progress',
  props: {
    /**
     * 百分比
     */
    percent: {
      type: Number,
      default () {
        return 0
      }
    }
  }
}
</script>

<style>
</style>