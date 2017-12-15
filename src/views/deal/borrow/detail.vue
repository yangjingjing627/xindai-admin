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
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title">姓名</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title">钱包地址</div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">李雷</div>
                  <div class="flex-center h40 g3 f14  border-right">££££££££</div>
                </el-col>
                <el-col :span="4">
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title">借款方ID</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title"></div>
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
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title">姓名</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title">钱包地址</div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">李雷</div>
                  <div class="flex-center h40 g3 f14  border-right">££££££££</div>
                </el-col>
                <el-col :span="4">
                  <div class="flex-center h40 g3 f14 border-right border-bottom bg-title">借款方ID</div>
                  <div class="flex-center h40 g3 f14 border-right grid-content bg-title"></div>
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
          }
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
  /*.bg-purple {
    background: #d3dce6;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }*/
  </style>
