<template>
  <div class="app-container calendar-list-container">
    <el-row type="flex" class="border-bottom row-bg" justify="space-between" :gutter='50' style="margin: 0;">
      <el-col :span="4">
        <div class="w-100 tc flex-center flex-column grid-content bg-purple">
          <div class="img-box border">
            <img src="" alt="">
          </div>
          <p class="g3 f16 mt20">约翰森</p>
        </div>
      </el-col>
      <el-col :span="10" class="border-right">
        <div class="h-50">
          <el-row type="flex" class="h-100 border-bottom">
            <el-col :span="8" class="h-100 flex-center">
              <div class="w-100 tl">
                <p class="g9 f14 mb14">用户ID</p>
                <p class="g3 f16">笑傲江湖</p>
              </div>
            </el-col>
            <el-col :span="8" class="h-100 flex-center">
              <div class="w-100 tl border-right">
                <p class="g9 f14 mb14">真实姓名</p>
                <p class="g3 f16">张飞</p>
              </div>
            </el-col>
            <el-col :span="8" class="h-100 flex-center">
              <div class="w-100 tl">
                <p class="g9 f14 mb14">手机号</p>
                <p class="g3 f16">13677898876</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="h-50">
          <el-row type="flex" class="h-100">
            <el-col :span="12" class="h-100 flex-center">
              <div class="w-100 tl border-right">
                <p class="g9 f14 mb14">身份证</p>
                <p class="g3 f16">420821199206305032</p>
              </div>
            </el-col>
            <el-col :span="12" class="h-100 flex-center">
              <div class="w-100 tl">
                <p class="g9 f14 mb14">注册时间</p>
                <p class="g3 f16">2017-09-19 05:48:40</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="h-50">
          <el-row type="flex" class="h-100 border-bottom">
            <el-col :span="12" class="h-100 flex-center">
              <div class="w-100 tl border-right">
                <p class="g9 f14 mb14">钱包昵称</p>
                <p class="g3 f16">小飞</p>
              </div>
            </el-col>
            <el-col :span="12" class="h-100 flex-center">
              <div class="w-100 tl">
                <p class="g9 f14 mb14">所属银行</p>
                <p class="g3 f16">招行</p>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="h-50">
          <el-row type="flex" class="h-100">
            <el-col :span="16" class="h-100 flex-center">
              <div class="w-100 tl border-right">
                <p class="g9 f14 mb14">钱包地址</p>
                <p class="g3 f16">1G1m8pS8RcBtdgRq1ohCM</p>
              </div>
            </el-col>
            <el-col :span="8" class="h-100 flex-center">
              <div class="w-100 tl">
                <p class="g9 f14 mb14">钱包余额</p>
                <p class="g3 f16">30000</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <h3>银行卡</h3>
    <el-table :data="bank_info" border fit highlight-current-row style="width: 100%; overflow: auto;">
      <el-table-column align="center" label="序号" width="80">
        <template scope="scope">
          <span>{{ scope.row.index }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="银行" width="130">
        <template scope="scope">
          <span>{{ scope.row.bank_name }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="银行卡号" width="">
        <template scope="scope">
          <span>{{ scope.row.bank_number }}</span>
        </template>
      </el-table-column>
    </el-table>

    <h3>操作日志</h3>
    <el-table :key='tableKey' :data="listData" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%; overflow: auto;">
      <el-table-column align="center" label="时间" width="180">
        <template scope="scope">
          <span>{{scope.row.registerTime}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作员" width="100">
        <template scope="scope">
          <span>{{scope.row.name}}诸葛神侯</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="修改项目" width="200">
        <template scope="scope">
          <span>注册手机号</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="修改前内容" width="150">
        <template scope="scope">
          <span>13699887766</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="更改内容" width="150">
        <template scope="scope">
          <span>13678957833</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="备注" width="">
        <template scope="scope">
          <span>这是第三次进行信息修改</span>
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

<script>
import { fetchList, fetchPv } from '@/api/article'
import waves from '@/directive/waves/index.js' // 水波纹指令
import { parseTime } from '@/utils'

export default {
  name: 'table_demo',
  directives: {
    waves
  },
  data() {
    return {
      bank_info: [
        {
          index: 1,
          bank_name: '招商银行',
          bank_number: '6228480402564890018'
        }, {
          index: 2,
          bank_name: '招商银行',
          bank_number: '6228480402564890018'
        }, {
          index: 3,
          bank_name: '招商银行',
          bank_number: '6228480402564890018'
        }
      ],
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
          nameAuth: '张云',
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
        type: ''
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 200px;
  }
  .row-bg {
    padding: 20px 0;
  }
  .mb14 {
    margin-bottom: 14px;
  }
  .tl {
    text-align: left;
    padding-left: 40px;
    box-sizing: border-box;
  }
  .img-box {
    width: 70px;
    height: 70px;
    background: tan;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mt20 {
    margin-top: 20px;
  }
  .flex-column {
    flex-direction: column;
  }
</style>
