<template>
  <div class="main">
    <h3 class="pb20 border-bottom f18">个人信息</h3>
    <el-row :gutter="100" class="pt24 pb12 g9 f14">
      <el-col :span="12">
        <div>
          <h3 class="g3 f16">借款方信息</h3>
          <el-row>
            <el-col :span="24">
              <el-row class="border">
                <el-col :span="4">
                  <div  class="flex-center h40 g3 f14 border-right border-bottom bg-title">姓名</div>
                  <div  class="flex-center h40 g3 f14 border-right grid-content bg-title">钱包地址</div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40">李雷</div>
                  <div class="flex-center h40 g3 f14  border-right">££££££££</div>
                </el-col>
                <el-col :span="4">
                  <div  class="flex-center h40 g3 f14 border-right border-bottom bg-title">借款方ID</div>
                  <div  class="flex-center h40 g3 f14 border-right grid-content bg-title">££££</div>
                </el-col>
                <el-col :span="8">
                  <div class="flex-center h40 g3 f14  border-right border-bottom h40"></div>
                  <div class="flex-center h40 g3 f14  border-right"></div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12"><div class="bg-tomato">Email地址</div></el-col>
    </el-row>
    <!-- <div class="bg-tan g3 f20" style="text-align: center; width: 200px; height: 100px; vertical-align: middle; display: table-cell;">
      垂直水平居中内容
    </div> -->
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
