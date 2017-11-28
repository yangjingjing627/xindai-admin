<template>
  <div class="p20">
    <!-- stripe 属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用  -->
    <el-table
      border
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column align="center" label="用户ID" width="180">
        <template scope="scope">
          <span>{{scope.row.rownum}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="手机号" width="180">
        <template scope="scope">
          <span>{{scope.row.stringcode}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="实名认证" width="180">
        <template scope="scope">
          <span>{{scope.row.amount}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="身份证" width="180">
        <template scope="scope">
          <span>{{scope.row.rownum}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="绑定银行卡" width="180">
        <template scope="scope">
          <span>{{scope.row.stringcode}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="钱包地址" width="180">
        <template scope="scope">
          <span>{{scope.row.amount}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="账户余额" width="180">
        <template scope="scope">
          <span>{{scope.row.rownum}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册时间" width="">
        <template scope="scope">
          <span>{{scope.row.stringcode}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户状态" width="">
        <template scope="scope">
          <span>{{scope.row.amount}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="">
        <template scope="scope">
          <el-button size="small" type="primary" @click="handleModifyStatus(scope.row)">查看</el-button>
          <el-button size="small" type="primary" @click="handleModifyStatus(scope.row)">修改</el-button>
          <el-button size="small" type="primary" @click="handleModifyStatus(scope.row)">信贷记录</el-button>
          <el-button size="small" type="primary" @click="handleModifyStatus(scope.row)">理财记录</el-button>
          <el-button size="small" type="primary" @click="handleModifyStatus(scope.row)">账单</el-button>
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
.flexA {
  display: flex;
}
.flex {
  flex: 1;
}
.w100 {
  width: 100px;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
</style>
