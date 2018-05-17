<template>
  <div class="my-tab">
    <ul class="tab-head">
      <li v-for="(n, index) in heads" :class="{selected: value === n.flag || !value && index === 0}" @click="headClick(n)">
        <a href="javascript:;">{{n.label}}</a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-tab',
  data () {
    return {
      heads: [],
      curr: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default () {
        return ''
      }
    },
    tabClick: Function
  },
  methods: {
    headClick (n) {
      if (this.value === n.flag) {
        return
      }
      this.$emit('change', n.flag)
      if (this.tabClick) {
        let self = this
        this.tabClick(self, n)
      }
    }
  }
}
</script>

<style>
</style>