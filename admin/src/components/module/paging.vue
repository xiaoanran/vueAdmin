<template>
  <div class="my-paging clear">
  	<span class="paging-count">
  		<i>{{page.total}}</i>条记录，共 <i>{{page.pageNum}}</i>页
  	</span>
  	<ul class="paging-list">
  	  <li :class="{disabled: page.currPage === 1}" @click="pagingClick('prev')"><</li>
  		<template v-if="page.currPage <= 5">
  		  <li v-for="num in page.pageNum" v-if="num <= 5" :class="{curr: page.currPage === num}" @click="pagingClick(num)">{{num}}</li>
  		</template>
  		<template v-else>
  		  <li @click="pagingClick(1)">1</li>
        <li @click="pagingClick(2)">2</li>
        <li>...</li>
        <li @click="pagingClick(page.currPage - 2)">{{page.currPage - 2}}</li>
        <li @click="pagingClick(page.currPage - 1)">{{page.currPage - 1}}</li>
        <li class="curr" @click="pagingClick(page.currPage)">{{page.currPage}}</li>
        <li v-for="num in page.pageNum - page.currPage" v-if="page.pageNum - page.currPage <= 2" @click="pagingClick(num)">{{page.currPage + num}}</li>
        <template v-if="page.pageNum - page.currPage >= 5">
          <li @click="pagingClick(page.currPage + 1)">{{page.currPage + 1}}</li>
          <li @click="pagingClick(page.currPage + 2)">{{page.currPage + 2}}</li>
          <li>...</li>
          <li @click="pagingClick(page.pageNum - 1)">{{page.pageNum - 1}}</li>
          <li @click="pagingClick(page.pageNum)">{{page.pageNum}}</li>
        </template>
        <template v-if="page.pageNum - page.currPage > 2 && page.pageNum - page.currPage < 5">
          <li @click="pagingClick(page.currPage + 1)">{{page.currPage + 1}}</li>
          <li @click="pagingClick(page.currPage + 2)">{{page.currPage + 2}}</li>
          <li>...</li>
        </template>
      </template>
  		<li :class="{disabled: page.currPage === page.pageNum}" @click="pagingClick('next')">></li>
  	</ul>
  </div>
</template>

<script>
  export default {
    name: 'my-paging',
    model: {
      prop: 'page',
      event: 'change'
    },
    props: {
      page: {
        type: Object,
        default () {
          return {
            currPage: 1,
            pageNum: 1,
            total: 1
          }
        }
      },
      disabled: {
        type: Boolean,
        default () {
          return false
        }
      },
      clickAfter: Function
    },
    methods: {
      pagingClick (num) {
        if (!isNaN(num)) {
          if (num !== this.page.currPage) {
            let result = this.page
            result.currPage = num
            this.$emit('change', result)
            this.clickAfter(num, this)
          }
        } else {
          if (num === 'prev') {
            if (this.page.currPage > 1) {
              let result = this.page
              result.currPage = this.page.currPage - 1
              this.$emit('change', result)
              this.clickAfter(result, this)
            }
          }
          if (num === 'next') {
            if (this.page.currPage < this.page.pageNum) {
              let result = this.page
              result.currPage = this.page.currPage + 1
              this.$emit('change', result)
              this.clickAfter(result, this)
            }
          }
        }
      }
    }
  }
</script>

<style>
</style>