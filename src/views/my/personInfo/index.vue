<template>
  <div class="main">
    <h3 class="pb20 border-bottom f18">个人信息</h3>
    <el-row :gutter="20" class="pt24 pb12 g9 f14">
      <el-col :span="6"><div>用户名</div></el-col>
      <el-col :span="6"><div>Email地址</div></el-col>
      <el-col :span="6"><div>角色</div></el-col>
    </el-row>
    <el-row :gutter="20" class="g3 f16">
      <el-col :span="6"><div>{{ form.username }}小燕子</div></el-col>
      <el-col :span="6"><div>{{ form.email }}1122334@163.com</div></el-col>
      <el-col :span="6"><div>{{ form.role }}admin</div></el-col>
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
