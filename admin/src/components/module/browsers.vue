<template>
  <div class="my-browsers">
    <div class="browsers-box">
      <p class="box-warn">
        <i class="warn-ico"></i>你正在使用的浏览器内核版本过低，
        <a href="https://www.microsoft.com/zh-cn/WindowsForBusiness/End-of-IE-support" target="_blank">微软已经不再提供技术支持</a>，为避免可能存在的安全隐患，请尽快升级你的浏览器或者安装更安全的浏览器访问该系统。
      </p>
      <div class="box-list">
        <a class="chrome" href="" target="_blank">
          <i class="icon_browser"></i>
          <strong class="browser_name" data-type="chrome">Chrome</strong>
        </a>
      </div>
      <p>如果你正在使用的是双核浏览器，比如QQ浏览器、搜狗浏览器、猎豹浏览器、世界之窗浏览器、傲游浏览器、360浏览器等，可以使用浏览器的极速模式来继续访问该系统。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-browsers'
}
</script>

<style lang="less">
  .my-browsers {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .browsers-box {
      > p {
        text-align: center;
        color: #999;
      }
      .box-warn {
        font-size: 17px;
        color: #333;
        .warn-ico {
          background: url(/static/imgs/module/base_z3b5429.png) 0 637px;
          display: inline-block;
          width: 20px;
          height: 20px;
          position: relative;
          top: 3px;
          margin-right: 5px;
        }
        > a {
          color: #576B95;
        }
      }
      .box-list {
        padding: 40px;
        > a {
          margin: 0 15px;
          display: inline-block;
        }
      }
    }
  }
</style>