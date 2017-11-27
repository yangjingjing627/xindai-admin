<template>
  <div class="p20">
    <h3>基本信息</h3>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="真实姓名">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="用户ID">
        <el-input v-model="formLabelAlign.userId"></el-input>
      </el-form-item>
      <el-form-item label="账户余额">
        <el-input v-model="formLabelAlign.remianAmount"></el-input>
      </el-form-item>
    </el-form>
    <h3>账户余额详情</h3>
    <!-- stripe 属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用  -->
    <el-table
      border
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column align="center" label="序号" width="180">
        <template scope="scope">
          <span>{{scope.row.rownum}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="串码" width="180">
        <template scope="scope">
          <span>{{scope.row.stringcode}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="金额" width="">
        <template scope="scope">
          <span>{{scope.row.amount}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          labelPosition: 'right',
          formLabelAlign: {
            name: '李雷',
            userId: '12232323',
            remianAmount: 0
          },
          tableData:
          [
            {
              rownum: '1237264374673',
              stringcode: '13289897676',
              amount: '99999'
            },
            {
              rownum: '1237264374673',
              stringcode: '13289897676',
              amount: '1000'
            },
            {
              rownum: '1237264374673',
              stringcode: '13289897676',
              amount: '28738'
            }
          ]
        }
      },
      methods: {

      }
    }
  </script>
<style media="screen" lang="scss">
.el-input {
  width: 200px;
}
</style>
