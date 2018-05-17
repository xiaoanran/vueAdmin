<template>
  <div class="my-switch" :class="{on: status}" @click="status = !status">
  	<span class="switch-cursor"></span>
  	<span class="switch-show">
  	  <span>开</span>
  	  <span>关</span>
  	</span>
  </div>
</template>

<script>
export default {
  name: 'my-switch',
  model: {
    prop: 'status',
    event: 'change'
  },
  props: {
    status: {
      type: Boolean,
      default () {
        return true
      }
    }
  }
}
</script>

<style>
</style>