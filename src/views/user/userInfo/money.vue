<template>
  <div class="p20">
    <h3>基本信息</h3>
    <ul>
      <li class="flexA"><span class="w100">真实姓名：</span><span class="flex1">李雷</span></li>
      <li class="flexA"><span class="w100">用户ID：</span><span class="flex1">11</span></li>
      <li class="flexA"><span class="w100">账户余额：</span><span class="flex1">3293829</span></li>
    </ul>
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
