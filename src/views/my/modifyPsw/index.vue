<template>
  <div class="p20">
    <h3>修改密码</h3>
    <el-form ref="form" :model="form" label-position="top" label-width="80px">
      <el-form-item label="旧密码">
        <el-input
        placeholder="请输入旧密码"
        v-model="form.oldPsw">
        </el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.newPsw" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" label-width="100">
        <el-input v-model="form.rePsw"
        placeholder="再次确认新密码">
        </el-input>
      </el-form-item>
      <ul>
        <li>注意事项：</li>
        <li>1.应用系统用户密码的长度为8~16位，应至少为8位。</li>
        <li>2.本次更改的密码不能是前5次更改使用过的。</li>
      </ul>
      <el-form-item class="mt50">
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  </template>

  <script>
    export default {
      data() {
        return {
          form: {
            oldPsw: '',
            newPsw: '',
            rePsw: ''
          }
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!')
        }
      }
    }
  </script>
<style media="screen" lang="scss">
.el-input {
  width: 200px;
}
li {
  line-height: 30px;
}
</style>
