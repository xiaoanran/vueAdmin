<template>
  <li :class="{selected: isSelected}">
    <a :class="{disabled: disabled}" href="javascript:" :value="value" @click="optionClick" @click.shift="shiftClick">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    name: 'my-option',
    data () {
      return {
        parent: null
      }
    },
    props: [
      'value',
      'disabled',
      'label'
    ],
    computed: {
      isSelected () {
        let parent = this.$parent
        while (!parent.selected) {
          parent = parent.$parent
        }
        return parent.selected.includes(this.value)
      }
    },
    methods: {
      optionClick (e) {
        this.parent.choose(e, this)
      },
      shiftClick (e) {
        this.parent.choose(e, this, true)
      }
    },
    mounted () {
      this.parent = this.$parent
      while (!this.parent.choose) {
        this.parent = this.parent.$parent
      }
    }
  }
</script>

<style>
</style>