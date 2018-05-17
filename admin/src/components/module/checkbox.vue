<template>
  <label class="my-checkbox" :class="{checked: isChecked, disabled: disabled}">
    <a href="javascript:"></a>
    <span>{{text}}</span>
    <input type="checkbox" :name="name" :value="value" :checked="isChecked" @change="checkBoxChange" :disabled="disabled"/>
  </label>
</template>

<script>
  export default {
    name: 'my-checkbox',
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      value: {
        type: [Number, String],
        required: true
      },
      checked: {
        default: false
      },
      text: {
        type: String,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String
      },
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      }
    },
    computed: {
      isChecked () {
        if (this.checked instanceof Array) {
          return this.checked.includes(this.value)
        }
        return this.checked === this.trueValue
      }
    },
    methods: {
      checkBoxChange (event) {
        let checked = event.target.checked
        if (this.checked instanceof Array) {
          let newArr = [...this.checked]
          if (checked) {
            newArr.push(this.value)
          } else {
            newArr.splice(newArr.indexOf(this.value), 1)
          }
          this.$emit('change', newArr)
        } else {
          this.$emit('change', event.target.value ? this.trueValue : this.falseValue)
        }
      }
    }
  }
</script>

<style>
</style>