<template>
  <li class="">
    <h4>{{value}}</h4>
    <ol>
      <slot></slot>
    </ol>
  </li>
</template>

<script>
  export default {
    name: 'my-group-option',
    props: [
      'value'
    ]
  }
</script>

<style>
</style>