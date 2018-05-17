<template>
  <div class="form-group" :class="{error: error, inline: inline}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'form-group',
  props: {
    /**
     * 是否行内
     */
    inline: {
      type: Boolean,
      default () {
        return false
      }
    },
    /**
     * 是否验证通过
     */
    error: {
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