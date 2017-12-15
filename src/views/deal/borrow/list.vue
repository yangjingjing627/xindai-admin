<template>
  <div class="app-container calendar-list-container mb50">
    <div class="filter-container">
      <el-form ref="form" :model="listQuery" label-width="100px">
        <el-row :gutter="40">
          <el-col :span="6">
            <el-form-item label="借款编号">
              <el-input v-model="listQuery.borrowNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="支付订单号">
              <el-input v-model="listQuery.payOrderCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="借款方">
              <el-input v-model="listQuery.borrower"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="放款方">
              <el-input v-model="listQuery.lenders"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="6">
            <el-form-item label="借款ID">
              <el-input v-model="listQuery.borrowId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="放款ID">
              <el-input v-model="listQuery.lendId"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="申请产品">
              <el-input v-model="listQuery.applyProduct"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="标的状态">
              <!-- <el-input v-model="listQuery.markState"></el-input> -->
              <el-select clearable class="filter-item" v-model="listQuery.markState" placeholder="">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="6">
            <el-form-item label="申请时间">
              <el-date-picker
                v-model="listQuery.startDate"
                 placeholder="请选择申请时间"
                 format="yyyy-MM-dd HH:mm:ss"
                 :picker-options="startDateOpt"
                type="datetime">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="放款时间">
              <el-date-picker
                v-model="listQuery.endDate"
                 placeholder="请选择放款时间"
                 format="yyyy-MM-dd HH:mm:ss"
                 :picker-options="endDateOpt"
                type="datetime">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="height: 1px;"></el-col>
          <el-col :span="6">
            <el-form-item>
              <el-button type="primary" @click="handleFilter">查询</el-button>
              <el-button @click="cancelFilter">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row >

      <el-table-column align="center" label="借款编号" width="120">
        <template scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="申请产品">
        <template scope="scope">
          <span>信贷业务1</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="借款方">
        <template scope="scope">
          <span>韩梅梅</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="借款方ID">
        <template scope="scope">
          <span>######</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="放款方">
        <template scope="scope">
          <span>工商银行</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="放款方ID">
        <template scope="scope">
          <span>######</span>
        </template>
      </el-table-column>

      <el-table-column width="130px" align="center" label="产品利率">
        <template scope="scope">
          <span>10.8000%</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="合同金额">
        <template scope="scope">
          <span>99</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="借款申请项">
        <template scope="scope">
          <span>30</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="实际放款金额">
        <template scope="scope">
          <span>99</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="借据期限">
        <template scope="scope">
          <span>30天</span>
        </template>
      </el-table-column>

      <el-table-column width="150px" align="center" label="还款方式">
        <template scope="scope">
          <span>一次性还本付息</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="标的状态">
        <template scope="scope">
          <span>还款中</span>
        </template>
      </el-table-column>

      <el-table-column width="130px" align="center" label="支付订单号">
        <template scope="scope">
          <span>#########</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="申请时间">
        <template scope="scope">
          <span>2017-09-09 05:09:08</span>
          <!-- {{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}} -->
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="放款时间">
        <template scope="scope">
          <span>2017-12-09 05:09:08</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200">
        <template scope="scope">
          <router-link to="/deal/borrow_datail" class="blue">查看</router-link>
          <router-link to="/dashboard" class="blue">放款详情</router-link>
          <router-link to="/dashboard" class="blue">还款详情</router-link>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
        :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script src="vue.js" charset="utf-8"></script>
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
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        borrowNumber: '13123456789',
        payOrderCode: '',
        borrower: '俞敏洪',
        lenders: '方志敏',
        borrowId: '13123456789',

        lendId: '13123456789',
        applyProduct: '信贷一期',
        markState: '还款中',
        startDate: '',
        endDate: '',

        //
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
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
<style media="screen">
  /*.el-row {
    margin-bottom: 0;
  }*/
</style>
