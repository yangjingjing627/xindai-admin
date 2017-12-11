<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="标题" v-model="listQuery.title">
      </el-input>
      <el-select clearable class="filter-item" style="" v-model="listQuery.type" placeholder="类型">
        <el-option v-for="item in  selectIterm" :value="item.value">
        </el-option>
      </el-select>
      <el-button class="filter-item" type="primary" v-waves icon="search" @click="handleFilter">搜索</el-button>
    </div>

    <el-table :key='tableKey' :data="listData" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%; overflow: auto;">
      <el-table-column align="center" label="用户ID" width="80">
        <template scope="scope">
          <span>{{scope.row.userId}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="手机号" width="130">
        <template scope="scope">
          <span>{{scope.row.tel}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="实名认证" width="">
        <template scope="scope">
          <span>{{scope.row.nameAuth}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="身份证" width="140">
        <template scope="scope">
          <span>{{scope.row.authCard}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="绑定银行卡" width="100">
        <template scope="scope">
          <span>{{scope.row.bandBind}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="钱包地址" width="140">
        <template scope="scope">
          <span>{{scope.row.qbAddr}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="账户余额" width="100">
        <template scope="scope">
          <span>{{scope.row.remainMoney}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册时间" width="120">
        <template scope="scope">
          <span>{{scope.row.registerTime}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户状态" width="80">
        <template scope="scope">
          <span>{{scope.row.userStatus}}</span>
        </template>
      </el-table-column>

      <el-table-column fixed="right" align="center" label="操作" width="200">
        <template scope="scope">
          <router-link to="/user/info">查看</router-link>
          <router-link to="/dashboard">修改</router-link>
          <router-link to="/user/accountBalance">账单</router-link>
          <router-link to="/user/credit">信贷记录</router-link>
          <router-link to="/user/money">理财记录</router-link>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="类型">
          <el-select class="filter-item" v-model="temp.type" placeholder="请选择">
            <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-select class="filter-item" v-model="temp.status" placeholder="请选择">
            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="标题">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>

        <el-form-item label="重要性">
          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
        </el-form-item>

        <el-form-item label="点评">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="temp.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="create">确 定</el-button>
        <el-button v-else type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="阅读数统计" :visible.sync="dialogPvVisible" size="small">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="渠道"> </el-table-column>
        <el-table-column prop="pv" label="pv"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">确 定</el-button>
      </span>
    </el-dialog>

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
    return {
      listData: [
        {
          userId: '1',
          tel: '13800990034',
          nameAuth: '李雷李雷',
          authCard: '123456789012345671234',
          bandBind: '建设银行',
          qbAddr: 'sdjdjnejfenkfekf',
          remainMoney: 123323,
          registerTime: '2017-09-09 23:45:12',
          userStatus: '正常'
        }, {
          userId: '1',
          tel: '13800990034',
          nameAuth: '李雷',
          authCard: '123456789012345671234',
          bandBind: '建设银行',
          qbAddr: 'sdjdjnejfenkfekf',
          remainMoney: 123323,
          registerTime: '2017-09-09 23:45:12',
          userStatus: '正常'
        }, {
          userId: '1',
          tel: '13800990034',
          nameAuth: '李雷',
          authCard: '123456789012345671234',
          bandBind: '建设银行',
          qbAddr: 'sdjdjnejfenkfekf',
          remainMoney: 123323,
          registerTime: '2017-09-09 23:45:12',
          userStatus: '正常'
        }, {
          userId: '1',
          tel: '13800990034',
          nameAuth: '李雷',
          authCard: '123456789012345671234',
          bandBind: '建设银行',
          qbAddr: 'sdjdjnejfenkfekf',
          remainMoney: 123323,
          registerTime: '2017-09-09 23:45:12',
          userStatus: '正常'
        }, {
          userId: '1',
          tel: '13800990034',
          nameAuth: '李雷',
          authCard: '123456789012345671234',
          bandBind: '建设银行',
          qbAddr: 'sdjdjnejfenkfekf',
          remainMoney: 123323,
          registerTime: '2017-09-09 23:45:12',
          userStatus: '正常'
        }
      ],
      selectIterm: [
        { value: '用户ID' },
        { value: '手机号' },
        { value: '姓名' },
        { value: '身份证' },
        { value: '银行卡号' },
        { value: '钱包地址' }
      ],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: '',
        sort: '+id'
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
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
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
      this.temp.timestamp = +this.temp.timestamp
      for (const v of this.list) {
        if (v.id === this.temp.id) {
          const index = this.list.indexOf(v)
          this.list.splice(index, 1, this.temp)
          break
        }
      }
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
<style media="screen" lang='scss'>

  a {
    color: #20a0ff;
  }
  a:hover {
    color: red;
    opacity: 0.4;
    filter:alpha(opacity=40);
  }
</style>
