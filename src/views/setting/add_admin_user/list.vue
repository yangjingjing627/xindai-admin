<template>
  <div class="app-container calendar-list-container mb50">
    <h2 class="mb20">新增管理员</h2>
    <div class="filter-container">
      <el-form :model="listQuery" status-icon :rules="rules2" ref="listQuery" label-width="100px">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input v-model="listQuery.username"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="listQuery.pass" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="listQuery.checkPass" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="" prop="checkPass" align="center">
              <el-button @click="">取 消</el-button>
              <el-button type="primary" @click="submitForm('listQuery')">确 定</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { fetchList, fetchPv } from '@/api/article'
import waves from '@/directive/waves/index.js' // 水波纹指令
import { parseTime } from '@/utils'

const calendarTypeOptions = [
  { key: 'CN', display_name: '中国' },
  { key: 'US', display_name: '美国' },
  { key: 'JP', display_name: '日本' },
  { key: 'EU', display_name: '欧元区' }
]

// arr to obj
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'table_demo',
  directives: {
    waves
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        username: '',
        pass: '',
        checkPass: '',

        //
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      },
      startDateOpt: {
        disabledDate: (time) => {
          if (this.endDate !== '') {
              // return time.getTime() > Date.now() || time.getTime() > this.endDate
            return time.getTime() > this.endDate
          } else {
            return time.getTime() > Date.now()
          }
        }
      },
      endDateOpt: {
        disabledDate: (time) => {
          // return time.getTime() < this.startDate || time.getTime() > Date.now();
          return time.getTime() < this.startDate
        }
      },
      temp: {
        id: undefined,
        importance: 0,
        remark: '',
        timestamp: 0,
        title: '',
        type: '',
        status: 'published'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: '按ID升序列', key: '+id' }, { label: '按ID降序', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      dialogPvVisible: false,
      pvData: [],
      showAuditor: false,
      tableKey: 0
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    /*

    */
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    cancelFilter() {
      this.listQuery.page = 1

      this.listQuery.borrowNumber = ''
      this.listQuery.payOrderCode = ''
      this.listQuery.borrower = ''
      this.listQuery.lenders = ''
      this.listQuery.borrowId = ''

      this.listQuery.lendId = ''
      this.listQuery.applyProduct = ''
      this.listQuery.markState = ''
      this.listQuery.startDate = ''
      this.listQuery.endDate = ''
      this.getList()
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    timeFilter(time) {
      if (!time[0]) {
        this.listQuery.start = undefined
        this.listQuery.end = undefined
        return
      }
      this.listQuery.start = parseInt(+time[0] / 1000)
      this.listQuery.end = parseInt((+time[1] + 3600 * 1000 * 24) / 1000)
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    create() {
      this.temp.id = parseInt(Math.random() * 100) + 1024
      this.temp.timestamp = +new Date()
      this.temp.author = '原创作者'
      this.list.unshift(this.temp)
      this.dialogFormVisible = false
      this.$notify({
        title: '成功',
        message: '创建成功',
        type: 'success',
        duration: 2000
      })
    },
    update() {
      // this.temp.timestamp = +this.temp.timestamp
      // for (const v of this.list) {
      //   if (v.id === this.temp.id) {
      //     const index = this.list.indexOf(v)
      //     this.list.splice(index, 1, this.temp)
      //     break
      //   }
      // }

      this.dialogFormVisible = false
      this.$notify({
        title: '成功',
        message: '更新成功',
        type: 'success',
        duration: 2000
      })
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 0,
        remark: '',
        timestamp: 0,
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      require.ensure([], () => {
        const { export_json_to_excel } = require('vendor/Export2Excel')
        const tHeader = ['时间', '地区', '类型', '标题', '重要性']
        const filterVal = ['timestamp', 'province', 'type', 'title', 'importance']
        const data = this.formatJson(filterVal, this.list)
        export_json_to_excel(tHeader, data, 'table数据')
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
