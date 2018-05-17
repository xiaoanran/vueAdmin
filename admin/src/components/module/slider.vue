<template>
  <div class="my-slider" :style="{width: width * 2 + 'px'}">
    <input ref="init" type="hidden" :value="value"/>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../../../static/js/vendor/range.js'
  export default {
    name: 'my-slider',
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: [String, Number],
        default () {
          return '0'
        }
      },
      width: {
        type: Number,
        default () {
          return 400
        }
      },
      init: Object,
      theme: {
        type: String,
        default () {
          return ''
        }
      }
    },
    mounted () {
      let $l = $(this.$refs.init)
      $l.jRange(this.init)
    }
  }
</script>

<style>
</style>