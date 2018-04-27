<template>
  <div class="main">
    <h3 class="pb20 border-bottom f20 g3">接待交易详情</h3>
    <el-row :gutter="100" class="pt24 pb12 g9 f14">
      <el-col :span="12">
        <div>
          <h3 class="g3 f16">借款方信息
            <router-link to="/deal/borrow" class="blue fr">查看详情</router-link>
          </h3>
          <el-row>
            <el-col :span="24">
              <el-row class="border-top border-bottom border-left">
                <el-col :span="4">
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title weight-500">姓名</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title weight-500">钱包地址</div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">李雷</div>
                  <div class="flex-center h40 g3 f14  border-right">££££££££</div>
                </el-col>
                <el-col :span="4">
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title weight-500">借款方ID</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title weight-500"></div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">¥¥¥¥¥¥¥¥</div>
                  <div class="flex-center h40 g3 f14  border-right"></div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <h3 class="g3 f16">放款方信息
            <router-link to="/deal/borrow" class="blue fr">查看详情</router-link>
          </h3>
          <el-row>
            <el-col :span="24">
              <el-row class="border-top border-bottom border-left">
                <el-col :span="4">
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title weight-500">姓名</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title weight-500">钱包地址</div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">李雷</div>
                  <div class="flex-center h40 g3 f14  border-right">££££££££</div>
                </el-col>
                <el-col :span="4">
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title weight-500">借款方ID</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title weight-500"></div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">¥¥¥¥¥¥¥¥</div>
                  <div class="flex-center h40 g3 f14  border-right"></div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div class="">
      <h3 class="g3 f16 border-bottom">基本信息</h3>
      <!-- <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row > -->
      <el-table :data="list" border fit highlight-current-row >
        <el-table-column align="center" label="借款编号" width="120">
          <template scope="scope">
            <span>{{ scope.row.borrowId }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="申请产品" width="120">
          <template scope="scope">
            <span>信贷业务3</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="产品利率" width="120">
          <template scope="scope">
            <span>10.8000%</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="合同金额" width="120">
          <template scope="scope">
            <span>99</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="借款申请额" width="120">
          <template scope="scope">
            <span>99</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="实际放款金额" width="140">
          <template scope="scope">
            <span>99</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="借款期限" width="120">
          <template scope="scope">
            <span>3个月</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="还款方式" width="120">
          <template scope="scope">
            <span>一次性还本付息</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="标的状态" width="120">
          <template scope="scope">
            <span>还款中</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="申请时间" width="120">
          <template scope="scope">
            <span>2017-09-19 05:48:40</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="放款时间" width="120">
          <template scope="scope">
            <span>2017-09-19 05:48:40</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="支付订单号" width="120">
          <template scope="scope">
            <span>9######</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="所在区块" width="120">
          <template scope="scope">
            <span>8769</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="交易哈希" width="120">
          <template scope="scope">
            <span>ffhjffhj</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="">
      <h3 class="g3 f16 border-bottom">附加信息</h3>
      <el-row :gutter="100">
        <el-col :span="8">
          <div class="grid-content lh50">
            <span class="weight-500 g3">授信</span>
            <span class="padding50 g6">授信全要素</span>
            <router-link to="" class="blue">查看</router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content lh50">
            <span class="weight-500 g3">借款合同</span>
            <span class="padding50 g6">PDF</span>
            <router-link to="" class="blue">查看</router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          form: {
            username: '',
            email: '',
            role: ''
          },
          list: [
            {
              borrowId: 12334
            }
          ]
        }
      }
    }
  </script>
  <style media="screen">
  .h40 {
    height: 40px;
  }
  .bg-title {
    background: #eef1f6;
  }
  .padding50 {
    padding: 50px;
  }
  /*.bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }*/
  </style>
