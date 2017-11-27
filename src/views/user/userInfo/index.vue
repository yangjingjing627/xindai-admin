<template>
  <div class="p20">
    <h3>个人详情</h3>
    <el-table
      border
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="userId"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userTel"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="注册时间">
      </el-table-column>
      <el-table-column
        prop="userStatus"
        label="用户状态">
      </el-table-column>
    </el-table>

    <h3>实名认证</h3>
    <el-table
      border
      :data="toNameAuth"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="真实姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cardId"
        label="身份证">
      </el-table-column>
    </el-table>

    <h3>实名认证</h3>
    <el-table
      border
      :data="tableData2"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="真实姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="zip"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template scope="scope">
          <el-button size="small" type="primary" @click="handleModifyStatus(scope.row)">查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            userId: '1237264374673',
            userTel: '13289897676',
            registerTime: '2017-11-27 05:48:12',
            userStatus: '审核中'
          }],
          toNameAuth: [{
            name: '1237264374673',
            cardId: '13289897676'
          }],
          tableData2: [{
            name: '王小虎',
            date: '2016-05-03',
            zip: '200333'
          }]
        }
      },
      methods: {
        handleModifyStatus(row) {
          console.log(row)
          const path = '/user/accountRemainMoney'
          this.$router.push(path)
        }
      }
    }
  </script>
<style media="screen" lang="scss">
.el-input {
  width: 200px;
}
</style>
