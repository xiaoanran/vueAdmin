<template>
  <ul class="my-tag" :class="{'border bg': hasBorder}">
    <li v-for="(n, index) in value" :class="{selected: n.selected}">
      {{n.text}}<i v-if="hasClose" @click="closeClick(n, index)">×</i>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'my-tag',
  model: {
    prop: 'value',
    event: 'delete'
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    hasClose: {
      type: Boolean,
      default () {
        return true
      }
    },
    hasBorder: {
      type: Boolean,
      default () {
        return true
      }
    },
    close: Function
  },
  methods: {
    closeClick (n, index) {
      if (this.close) {
        let self = this
        this.close(self, n)
      } else {
        let temp = this.value
        temp.splice(index, 1)
        this.$emit('delete', temp)
      }
    }
  }
}
</script>

<style>
</style>