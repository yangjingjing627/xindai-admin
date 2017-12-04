<template lang="html">
  <div class="p20">
    <el-form ref="form" :model="form" label-width="100px">
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="产品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="产品编码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="产品类型">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="贷款性质">
            <el-select v-model="form.loan" placeholder="请选择贷款性质">
              <el-option label="消费" value="xiaofei"></el-option>
              <el-option label="经营" value="jingying"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="产品核算体系">
            <el-select v-model="form.account" placeholder="产品核算体系">
              <el-option label="贷款核算体系" value="shanghai"></el-option>
              <el-option label="卡核算体系（账单核算）" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="利息收取方式">
            <el-select v-model="form.getProfitType" placeholder="请选择利息收取方式">
              <el-option label="放款时收" value="shanghai"></el-option>
              <el-option label="还款时收" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="币种">
            <el-select v-model="form.coinType" placeholder="请选择币种">
              <el-option label="人民币" value="shanghai"></el-option>
              <el-option label="美元" value="beijing"></el-option>
              <el-option label="欧元" value="shanghai"></el-option>
              <el-option label="日元" value="beijing"></el-option>
              <el-option label="英镑" value="shanghai"></el-option>
              <el-option label="港币" value="beijing"></el-option>
              <el-option label="澳元" value="shanghai"></el-option>
              <el-option label="新台币" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="客户类型">
            <el-select v-model="form.userType" placeholder="请选择客户类型">
              <el-option label="企业" value="shanghai"></el-option>
              <el-option label="个人" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="担保方式">
        <el-radio-group v-model="form.vouchType">
          <el-radio label="质押"></el-radio>
          <el-radio label="抵押"></el-radio>
          <el-radio label="保证"></el-radio>
          <el-radio label="信用"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="还款方式">
            <el-select v-model="form.userType" placeholder="请选择还款方式">
              <el-option label="按月支付" value="shanghai"></el-option>
              <el-option label="按季支付" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8"></el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="步增金额">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="基准利率">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="最小申请金额">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="最大申请金额">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="宽限期类型">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="宽限期天数">
            <el-input v-model="form.type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-form-item label="产品描述" class="desc">
        <el-input type="textarea" v-model="form.activityForm"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item align='center'>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>关闭</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          code: '',
          type: '',
          loan: '',
          account: '',
          getProfitType: '',
          coinType: '',
          userType: '',
          vouchType: '',
          activityForm: '',
          remark: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>
<style media="screen" lang="scss">
  .el-textarea__inner {
    width: 80%;
  }
  .desc .el-textarea__inner{
    height: 150px;
  }
</style>
