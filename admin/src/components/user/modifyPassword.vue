<template>
  <div class="my-panel">
    <div class="panel-head">
      <h1>修改密码</h1>
    </div>
    <div class="panel-container">
      
      <my-form>
        <form-group :inline="true">
          
          <form-group-item label="用户名">
            <my-input v-model="lll" type="password" v-verify:mobile="lll"></my-input>{{lll}}
          </form-group-item>
          <form-group-item label="手机号码">
            <my-input v-model="verify2" type="password" v-verify:mobile="verify2" data-error="请输入正确的手机号码"></my-input>
          </form-group-item>
        </form-group>
        
         <form-group>
          <form-group-item>
            <button class="my-button blue short" type="submit">保存</button>
            <button class="my-button blue short" type="button" @click="showModal">清除错误</button>
          </form-group-item>
        </form-group>
      </my-form>
      
      <my-form>
        <form-group :inline="true">
          
          <form-group-item label="用户名">
            <input class="my-text" type="text" autocomplete="off" spellcheck="false" maxlength="18">
          </form-group-item>
          <form-group-item label="手机号码">
            <input class="my-text" type="text" autocomplete="off" spellcheck="false" maxlength="18">
          </form-group-item>
          
        </form-group>
        
        <form-group>
          
          <form-group-item label="原密码" :important="true">
            <input class="my-text bg" type="password" autocomplete="off" spellcheck="false" maxlength="18">
          </form-group-item>
          
        </form-group>
        
        <form-group>
          
          <form-group-item label="新密码" :important="true">
            <input class="my-text bg" type="password" name="new" autocomplete="off" spellcheck="false" maxlength="18">
            <my-password-strong value="Aqazxc1230A_dfr"></my-password-strong>
          </form-group-item>
          
        </form-group>
        
        <form-group>
          
          <form-group-item label="爱好" :important="true">
            <my-checkbox v-model="ah" :value="0" text="游泳" v-verify:required="ah"></my-checkbox>
            <my-checkbox v-model="ah" :value="1" text="骑马" v-verify:required="ah" ></my-checkbox>
            {{ah}}
          </form-group-item>
          
        </form-group>
        
        <form-group>
          <form-group-item label="性别">
            <my-radio v-model="sex" :value="0" text="男" :disabled="true"></my-radio>
            <my-radio v-model="sex" :value="1" text="女"></my-radio>
            {{sex}}
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="下拉">
            <my-select v-model="currSelectd" :list="testList" :multiple="true" tabindex="2">
              <my-option v-for="l in testList" :key="l.value" :value="l.value" :label="l.label">{{l.label}}</my-option>
              <my-group-option key="分组1" value="分组1">
                <my-option v-for="l in testList" :key="l.value" :value="l.value" :label="l.label">{{l.label}}</my-option>
              </my-group-option>
            </my-select>{{currSelectd}}
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="步长">
            <my-step-input v-model="step" :max="15" v-verify:idcard:ui="verify1"></my-step-input>{{step}}
          </form-group-item>
        </form-group>
        
        
        <form-group>
          <form-group-item label="上传文件">
            <my-file-upload flag="ff"></my-file-upload>
            <my-mask>
              <my-progress :percent="50" class="short danger striped flash mb-none mt-xs"></my-progress><label class="c-white ml-xs mt-xs">正在上传,请稍后..</label>
            </my-mask>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="上传图片(单选)">
            <my-img-upload :imgs="imgs" :init="init" :deleteImg="deleteImg2" flag="ff"></my-img-upload>
          </form-group-item>
        </form-group>
        
         <form-group>
          <form-group-item>
            <my-panel title="测试面板" styles="ff">
              <!--<a class="tools-more" slot="utils">更多</a>
              <a class="tools-refresh iconfont icon-shuaxin" href="javascript:;" title="刷新" slot="utils"></a>-->这真是一个测试面板
            </my-panel>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="tab">
           <my-tab v-model="fb">
             <my-tab-panel label="发布通知" flag="fb">1</my-tab-panel>
             <my-tab-panel label="自定义" flag="diy">2</my-tab-panel>
           </my-tab>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="开关">
           <my-switch></my-switch>
          </form-group-item>
        </form-group>
        
       <form-group>
          <form-group-item label="滑块">
           <my-slider :init="testInit" :value="slider" :width="400"></my-slider>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="tag">
           <my-tag v-model="tag"></my-tag>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="消息提示">
           <my-msgs :block="true" type="error" text="错误消息提示"></my-msgs>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item label="表格">
           <my-table class="center">
             
             <my-table-thead>
                <th>
                  <my-checkbox v-model="all" value="1" text=""></my-checkbox>
                </th>
                <th>编号</th>
                <th>标题</th>
                <th>用户</th>
                <th>籍贯</th>
                <th>发布时间</th>
                <th>是否审核</th>
                <th>操作</th>
            </my-table-thead>
            
            <my-table-tbody>
              <tr>
                <td>
                  <my-checkbox v-model="tableCs" value="1" text=""></my-checkbox>
                </td>
                <td>20130908</td>
                <td>王金平幕僚：马英九声明字字见血 人活着没意思</td>
                <td>admin</td>
                <td>江苏南京</td>
                <td>2013-09-09 15:05</td>
                <td>已审核</td>
                <td>
                  <a href="#" class="tablelink">查看</a>
                  <a href="#" class="tablelink"> 删除</a>
                </td>
              </tr>
      
              <tr>
                <td>
                  <my-checkbox v-model="tableCs" value="2" text=""></my-checkbox>
                </td>
                <td>20130907</td>
                <td>温州19名小学生中毒流鼻血续：周边部分企业关停</td>
                <td>uimaker</td>
                <td>山东济南</td>
                <td>2013-09-08 14:02</td>
                <td>未审核</td>
                <td>
                  <a href="#" class="tablelink">查看</a>
                  <a href="#" class="tablelink">删除</a>
                </td>
              </tr>
            </my-table-tbody>
            
           </my-table>
          </form-group-item>
        </form-group>
        
        <form-group>
          <form-group-item>
            <button class="my-button blue short" type="submit" @click="showAlert">修改</button>
            <button class="my-button blue short" type="button" @click="showModal">显示弹出层</button>
            <button class="my-button blue short" type="button" @click="showConfirm">显示确认层</button>
            <button class="my-button blue short" type="button" @click="showConfirm2">显示确认层2</button>
          </form-group-item>
        </form-group>
        
      </my-form>
      
      <my-modal v-model="test" title="测试标题" :loading="loading1" :show-after="after" :close-after="after2"></my-modal>
      <my-paging v-model="paging" :clickAfter="pagingClick"></my-paging>{{paging}}
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modifyPassword',
    data () {
      return {
        lll: 1,
        verify1: 1,
        verify2: 2,
        slider: '20,80',
        tag: [
          {
            id: 1,
            text: 'yi'
          },
          {
            id: 2,
            text: 'er',
            selected: true
          }
        ],
        testInit: {
          from: 0,
          to: 100,
          step: 1,
          scale: [0, 25, 50, 75, 100],
          format: '%s',
          unit: '天',
          width: 300,
          showLabels: true,
          showScale: true,
          isRange: true,
          theme: ''
        },
        all: [],
        tableCs: [],
        fb: 'fb',
        ah: [0],
        sex: -1,
        test: false,
        currSelectd: [2],
        testList: [
          {
            value: 1,
            label: '路人甲'
          },
          {
            value: 2,
            label: '炮灰乙'
          },
          {
            value: 3,
            label: '土匪丁'
          },
          {
            value: 4,
            label: '骑马的火柴人'
          },
          {
            value: 5,
            label: '测试'
          },
          {
            value: 6,
            label: '测试2'
          }
        ],
        loading1: true,
        step: 10,
        paging: {
          currPage: 8,
          pageNum: 15,
          total: 200
        },
        imgs: ['http://o8uhyuamh.bkt.clouddn.com/2018-02/null-1680a99b47b64de1bcb4428b3e6adc81.png', 'http://o8uhyuamh.bkt.clouddn.com/2018-02/null-a936ca7325764c1ca77cebc3c9b03574.jpg', 'http://o8uhyuamh.bkt.clouddn.com/2018-02/null-5cd85d4111f149388c076329fbe05e58.jpg']
      }
    },
    methods: {
      pagingClick (num, paging) {
        console.info(num)
      },
      showAlert () {
        this.$MyAlert.show({
          type: 'loading',
          message: '哈哈',
          timeout: -1
        })
      },
      showModal () {
        this.test = true
        console.info(this.utils)
      },
      after (obj) {
        console.info('after')
      },
      after2 (obj) {
        console.info('after2')
      },
      showConfirm () {
        this.$MyConfirm.show({
          message: '确认删除吗？',
          ok (obj) {
            console.info(obj)
            alert('ok')
          }
        })
      },
      showConfirm2 () {
        this.$MyConfirm.show({
          message: '确认新增吗？',
          ok (obj) {
            console.info(obj)
            alert('ok')
          }
        })
      },
      deleteImg2: function (obj) {
        console.info(this)
        obj.handleStatus = false
      },
      init (obj) {
        console.info(obj.$refs)
      }
    },
    watch: {
      testList (value) {
        console.info(value)
      }
    },
    mounted () {
      setTimeout(() => {
        this.verify1 = 10086
      }, 3000)
    }
  }
</script>

<style>
</style>