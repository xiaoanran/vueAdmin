<template>
  <form class="my-form" :action="action" method="post">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'my-form',
  props: {
    action: {
      type: String,
      default () {
        return 'javascript:;'
      }
    }
  }
}
</script>

<style>
</style>