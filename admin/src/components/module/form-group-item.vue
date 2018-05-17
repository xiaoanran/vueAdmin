<template>
  <div class="group-item">
    <label>{{label}}
      <span v-if="important">*</span>
    </label>
    <div class="item-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-group-item',
  props: {
    /**
     * 左侧标题
     */
    label: {
      type: String,
      default () {
        return ''
      }
    },
    /**
     * 是否重要,在左侧标题显示红色*
     */
    important: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style>
</style>