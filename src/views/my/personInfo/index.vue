<template>
  <div class="main">
    <h3 class="pb20 border-bottom">个人信息</h3>
    <!-- <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input
        placehoder="请输入用户名"
        v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item label="Email地址">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="form.role"></el-input>
      </el-form-item>
    </el-form> -->

    <el-row :gutter="20" class="pt24 pb12 g9 f14">
      <el-col :span="6"><div class="grid-content bg-purple">用户名</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">Email地址</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">角色</div></el-col>
    </el-row>
    <el-row :gutter="20" class="g3 f16">
      <el-col :span="6"><div class="grid-content bg-purple">小燕子</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">1122334@163.com</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">admin</div></el-col>
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
<style media="screen" lang="scss">
.el-input {
  width: 200px;
}
</style>
