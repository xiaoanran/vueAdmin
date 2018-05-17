<template>
  <div class="my-select" :class="{multiple: multiple, open: open, disabled: disabled}" @mouseleave="selectLeave">
    <span class="select-title" v-if="!multiple" @click="showList">{{currLabel}}</span>
    <s class="" v-if="!multiple"><i></i></s>
    <ul class="select-list" ref="list" :style="{'height: 0': !disabled}">
      <slot></slot>
      <!-- <li :class="{selected: list.selected == l.value}" v-for="l in list.list">
        <a href="javascript:" :value="l.value" @click="choose">{{l.text}}</a>
      </li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'my-select',
    data () {
      return {
        open: false
      }
    },
    model: {
      prop: 'selected',
      event: 'change'
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default () {
          return false
        }
      },
      selected: {
        type: Array,
        default () {
          return []
        }
      },
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      // 点击显示隐藏列表
      showList () {
        let list = this.$refs.list
        if (this.disabled) return
        if (this.open) {
          list.style.height = '0px'
          this.open = false
          setTimeout(() => {
            list.style.display = 'none'
          }, 200)
        } else {
          list.style.display = 'block'
          list.style.height = '0px'
          let height = 0
          this.open = true
          Array.from(this.$refs.list.children).forEach((c, index) => {
            height += c.offsetHeight
          })
          list.style.height = height + 'px'
          if (height > 130) {
            if (!list.className.includes('scroll')) {
              list.className = list.className + ' scroll'
            }
          } else {
            list.className = list.className.replace(/scroll/, '')
          }
        }
      },
      choose (e, obj, shift) {
        let className = e.target.className
        if (this.disabled) return
        let result = this.selected
        // 选项不能禁用
        if (className.includes('disabled')) return
        if (this.multiple) {
          if (this.selected.includes(obj.value)) {
            let index = result.findIndex((value) => {
              return value.toString() === obj.value.toString()
            })
            result.splice(index, 1)
          } else {
            result.push(obj.value)
          }
        } else {
          // 选中不能再次点击
          if (this.selected.toString() === obj.value.toString()) return
          result = [obj.value]
          this.open = false
          this.$refs.list.style.height = '0px'
          this.currLabel = obj.label
          setTimeout(() => {
            this.$refs.list.style.display = 'none'
          }, 200)
        }
        this.$emit('change', result)
      },
      selectLeave (e) {
        if (this.disabled || this.multiple) return
        this.open = false
        this.$refs.list.style.height = '0px'
        setTimeout(() => {
          this.$refs.list.style.display = 'none'
        }, 200)
      }
    },
    computed: {
      currLabel () {
        if (this.selected.length === 0) {
          return '请选择'
        } else {
          return this.list.find((l) => l.value.toString() === this.selected[0].toString()).label
        }
      }
    }
  }
</script>

<style>
</style>