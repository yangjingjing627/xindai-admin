<template>
  <div class="p20">
    <h3>个人信息</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input
        placehoder="请输入用户名"
        v-model="form.username">
        </el-input>
      </el-form-item>
      <el-form-item label=Email地址>
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-input v-model="form.role"></el-input>
      </el-form-item>
    </el-form>
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
