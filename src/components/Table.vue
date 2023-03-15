<template>
  <div>
    <table class="layui-hide" id="tableDemo" lay-filter="tableDemo"></table>

    <!-- 工具栏模板 -->
    <div class="layui-btn-container toolbar" v-show="false">
      <div class="search-container">
        <div class="layui-form">
          <!-- 下拉选项动态添加 -->
          <select lay-filter="select-table-cols" id="select-table-cols">
          </select>
          <input type="text" name="search" placeholder="请输入搜索内容" autocomplete="on" class="layui-input serach-value" />
        </div>
        <button class="layui-btn layui-btn-lg" style="margin-left: 14px;" lay-event="search">
          搜索
        </button>
      </div>
      <div class="operation">
        <button class="layui-btn layui-btn-lg" lay-event="add">添加</button>
        <button class="layui-btn layui-btn-lg" lay-event="delete">删除</button>
      </div>
    </div>

    <!-- 单元格工具模板 -->
    <div class="toolTemplate" v-show="false">
      <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
      <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </div>

    <!-- 添加或编辑表格元素模板 -->
    <div id="add-table-row-template" v-show="false">
      <form class="layui-form" id="add-or-edit" lay-filter="add-or-edit">
        <div class="layui-form-item id-container">
          <span class="layui-form-label">
            <sup>*</sup>
            ID
          </span>
          <div class="layui-input-block">
            <input type="number" name="id" required lay-verify="required|id" placeholder="请输入用户ID" autocomplete="on"
              class="layui-input id-input" />
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            用户
          </span>
          <div class="layui-input-block">
            <input type="text" name="username" required lay-verify="required" placeholder="请输入用户名" autocomplete="on"
              class="layui-input" />
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            邮箱
          </span>
          <div class="layui-input-block">
            <input type="input" name="email" required lay-verify="required|email" placeholder="请输入邮箱地址" autocomplete="on"
              class="layui-input" />
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            性别
          </span>
          <div class="layui-input-block">
            <input type="radio" name="sex" value="男" title="男" />
            <input type="radio" name="sex" value="女" title="女" />
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            城市
          </span>
          <div class="layui-input-inline">
            <select name="city[province]" class="province-select" lay-filter="province-select" lay-verify="required">
            </select>
          </div>
          <div class="layui-input-inline">
            <select name="city[city]" class="city-select" lay-filter="city-select" lay-verify="required">
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text">
          <span class="layui-form-label">
            <sup>*</sup>
            签名
          </span>
          <div class="layui-input-block">
            <textarea name="sign" placeholder="请输入签名内容" lay-verify="required" class="layui-textarea"></textarea>
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            爱好
          </span>
          <div class="layui-input-block">
            <input type="checkbox" name="hobby[game]" value="游戏" title="游戏" />
            <input type="checkbox" name="hobby[watchTV]" value="看剧" title="看剧" />
            <input type="checkbox" name="hobby[exercise]" value="运动" title="运动" />
            <input type="input" name="hobby[other]" placeholder="其他爱好" autocomplete="on" class="layui-input"
              style="margin-top: 16px;" />
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            打卡
          </span>
          <div class="layui-input-block">
            <input type="number" name="checkin" required lay-verify="required" placeholder="请输入打卡次数" autocomplete="off"
              class="layui-input" />
          </div>
        </div>
        <div class="layui-form-item">
          <span class="layui-form-label">
            <sup>*</sup>
            加入时间
          </span>
          <div class="layui-input-block">
            <input type="text" name="joinTime" required lay-verify="required|date" placeholder="加入时间" autocomplete="off"
              class="layui-input join-time" />
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button class="layui-btn" lay-submit lay-filter="add-or-edit-table-row">
              {{ editType }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import cityData from '../util/nationalProvincialAndMunicipalData'

export default {
  name: 'Table',
  components: {},
  data() {
    return {
      tableData: {
        id: 10,
        data: [
          {
            id: 100,
            username: '张三',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-1'
          },
          {
            id: 101,
            username: '李四',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-2'
          },
          {
            id: 102,
            username: '王五',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-3'
          },
          {
            id: 103,
            username: '赵六',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 104,
            username: '孙七',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 105,
            username: '周八',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },

          {
            id: 106,
            username: '吴九',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 107,
            username: '郑十',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 108,
            username: '刘一',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 109,
            username: '陈二',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 110,
            username: '科比',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 111,
            username: '库里',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 112,
            username: '乔丹',
            email: 'test@email.com',
            sex: '女',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 113,
            username: '邓肯',
            email: 'test@email.com',
            sex: '女',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 114,
            username: '乔治',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 115,
            username: '尤雨溪',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          },
          {
            id: 116,
            username: '成龙',
            email: 'test@email.com',
            sex: '男',
            city: "湖南省长沙市",
            sign: '自律即自由',
            hobby: ["看剧", "篮球", "钓鱼", "游戏"],
            checkin: 106,
            joinTime: '2016-10-4'
          }
        ]
      },
      tableCols: [
        [
          { type: 'checkbox', fixed: 'left' },
          {
            field: 'id',
            fixed: 'left',
            width: 80,
            title: 'ID',
            sort: true,
            totalRowText: '合计：'
          },
          { field: 'username', width: 80, title: '用户' },
          {
            field: 'email',
            title: '邮箱 <i class="layui-icon layui-icon-email"></i>',
            hide: 0,
            width: 150,
          },
          { field: 'sex', width: 80, title: '性别', sort: true },
          { field: 'city', width: 150, title: '城市', minWidth: 115 },
          {
            field: 'sign',
            title: '签名',
            minWidth: 260,
            style: '-moz-box-align: start;'
          },
          {
            field: 'hobby',
            width: 200,
            title: '爱好',
          },
          {
            field: 'checkin',
            title: '打卡',
            width: 100,
            sort: true,
            totalRow: '{{= parseInt(d.TOTAL_NUMS) }} 次'
          },
          { field: 'joinTime', title: '加入时间', width: 120, sort: true },
          {
            fixed: 'right',
            title: '操作',
            width: 125,
            minWidth: 125,
            toolbar: '.toolTemplate'
          }
        ]
      ],
      searchCol: 'all', //  默认搜索全部表头
      intCols: [], // 值为整形的表头元素
      searchValue: '',
      editType: ''
    }
  },
  methods: {
    // 搜索并更新表格
    searchTable(table, count) {
      const { searchValue, tableData } = this
      // 搜索过后并且输入框为空，展示表格全部数据
      if (searchValue.length == 0 && count !== tableData.data.length) {
        table.reload(tableData.id, { data: tableData.data })
        this.bindSearchInputEvent()
        return
      }2

      // 没有搜索过并且输入框为空，不做操作
      if (searchValue.length == 0 && count == tableData.data.length) return

      const searchResult = this.getSearchResult()
      table.reload(tableData.id, { data: searchResult })
      this.bindSearchInputEvent()
    },
    // 得到搜索结果
    getSearchResult() {
      let { searchValue, tableData, searchCol } = this
      const data = tableData.data
      let searchResult = []

      if (this.intCols.includes(searchCol)) {
        searchValue = parseInt(searchValue) || searchValue
      }

      // 选择遍历全部表头
      if (searchCol === 'all') {
        data.forEach(rowData => {
          for (const key in rowData) {
            if (Object.hasOwnProperty.call(rowData, key)) {
              const value = rowData[key]
              if (value == searchValue) searchResult.push(rowData)
            }
          }
        })
      } else {
        // 根据指定表头过滤
        searchResult = data.filter(rowData => {
          return rowData[searchCol] === searchValue
        })
      }
      return searchResult
    },
    openPrompt($) {
      layer.open({
        title: this.editType,
        type: 1,
        area: ['40%', '75%'],
        content: $('#add-table-row-template'),
        shadeClose: true,
        btn: null,
        end() {
          $("#add-or-edit")[0].reset()
        }
      })
    },
    addTableRow($, form) {
      this.editType = "添加"
      this.openPrompt($)
      // 将城市下拉框重置
      const selectEl = document.querySelector(".city-select")
      selectEl.innerHTML = `<option value="">城市</option>`
      form.render("select", "add-or-edit")
      document.querySelector(".id-input").removeAttribute("disabled")
    },
    deleteTableRow(data, table) {
      // 如果没有勾选复选框，弹出提示
      if (data.length === 0) {
        return layer.msg('请勾选表格左侧的复选框')
      }

      const that = this
      layer.confirm('确认删除所选内容吗?', { icon: 3, title: '确认' }, function (
        index
      ) {
        const idList = []
        data.forEach(item => {
          idList.push(item.id)
        })

        const afterDeleteTable = that.tableData.data.filter(item => {
          return idList.indexOf(item.id) == -1
        })

        table.reload(that.tableData.id, { data: afterDeleteTable })
        that.bindSearchInputEvent()
        // 发送请求

        layer.close(index)
      })
    },
    editTableRow(data, form, laytpl) {
      let otherHobby = ''
      data.hobby.forEach(hobby => {
        switch (hobby) {
          case "游戏":
            data['hobby[game]'] = hobby
            break;
          case "看剧":
            data['hobby[watchTV]'] = hobby
            break;
          case "运动":
            data['hobby[exercise]'] = hobby
            break;
          default:
            otherHobby += hobby + ' '
            data['hobby[other]'] = otherHobby
            break;
        }
      })

      let cityArr = null
      if (data.city.includes("省")) {
        cityArr = data.city.split("省")
        cityArr[0] += "省"
      } else if (data.city.includes("市")) {
        cityArr = data.city.split("市")
        cityArr[0] += "市"
      }


      data['city[province]'] = cityArr[0]

      // 绑定城市模板
      const provinceData = cityData.filter(city => city.name === cityArr[0])
      this.bindCityOptions(laytpl, form, cityArr[0])
      form.render("select", "add-or-edit")
      data['city[city]'] = cityArr[1]

      delete data.city
      delete data.hobby

      form.val("add-or-edit", data)
      document.querySelector(".id-input").setAttribute("disabled", true)
    },
    // 通过laytpl添加下拉弹窗options模板
    addOptionsTemplate(laytpl, selector, data, optionValueKey, optionTitleKey, defaultOptionTitle, defaultOptionValue) {
      const selectEl = document.querySelector(selector)

      let innerDataType = ''
      if (typeof data[0] === "string") {
        innerDataType = "string"
      }

      const eachData = {
        data,
        optionValueKey,
        optionTitleKey,
        innerDataType
      }

      const optionTemplate = laytpl(`
        {{#  if (d.innerDataType == "string") {  layui.each(d.data, function(index, item){ }}
          <option value="{{ item }}">{{ item }}</option>
        {{# }); } else {  layui.each(d.data, function(index, item){ }}
          <option value="{{ item[d.optionValueKey] }}">{{ item[d.optionTitleKey] }}</option>
        {{#  }); } }}
        `).render(eachData)
      selectEl.innerHTML = `<option value="${defaultOptionValue}">${defaultOptionTitle}</option>`
      selectEl.innerHTML += optionTemplate
    },
    bindSearchInputEvent() {
      const searchInput = document.querySelector(
        '.search-container input.serach-value'
      )
      searchInput.value = this.searchValue
      searchInput.addEventListener('input', e => {
        this.searchValue = e.target.value
      })
    },
    // 搜索栏旁边的下拉框绑定options
    bindSearchOptions(laytpl) {
      const selectOptionsData = JSON.parse(JSON.stringify(this.tableCols[0]))
      selectOptionsData.shift()
      this.addOptionsTemplate(
        laytpl,
        '#select-table-cols',
        selectOptionsData,
        'field',
        'title',
        "全部",
        "all"
      )
    },
    // 绑定添加元素弹窗中省市二级联动中省份的options
    bindProvinceOptions(laytpl) {
      this.addOptionsTemplate(
        laytpl,
        '.province-select',
        cityData,
        'name',
        'name',
        "省份"
      )
    },
    // 绑定添加元素弹窗中省市二级联动中城市的options
    bindCityOptions(laytpl, form, cityName) {
      const provinceData = cityData.filter(city => city.name === cityName)
      this.addOptionsTemplate(
        laytpl,
        '.city-select',
        provinceData[0].citys,
        'name',
        'name',
        "城市"
      )
      form.render("select", "add-or-edit")
    }
  },
  mounted() {
    const that = this

    // 得到表的值为整形的表头id
    for (const key in this.tableData.data[0]) {
      if (Object.hasOwnProperty.call(this.tableData.data[0], key)) {
        const value = this.tableData.data[0][key]
        if (typeof value === 'number') this.intCols.push(key)
      }
    }

    layui.use(['table', 'form', 'jquery', 'laytpl', 'laydate'], function () {
      const table = layui.table
      const form = layui.form
      const $ = layui.jquery
      const laytpl = layui.laytpl
      const laydate = layui.laydate

      // 搜索栏旁边的下拉框绑定options
      that.bindSearchOptions(laytpl)
      // 绑定添加元素弹窗中省市二级联动中省份的options
      that.bindProvinceOptions(laytpl)

      form.render()
      form.on('select(select-table-cols)', function (data) {
        that.searchCol = data.value
      })
      // 省市二级联动添加城市下拉框选项
      form.on('select(province-select)', function (data) {
        that.bindCityOptions(laytpl, form, data.value)
      })
      form.on("submit(add-or-edit-table-row)", function (data) {
        const { field } = data
        const hobbies = []
        const newRowData = {}
        let city = ""

        for (const key in field) {
          const value = field[key]
          if (key.indexOf("hobby") !== -1) {
            if (value) hobbies.push(value)
          } else if (key.indexOf("city") !== -1) {
            city += value
          } else {
            newRowData[key] = value
          }
        }

        newRowData.hobby = hobbies
        newRowData.city = city

        if (that.editType === "添加") {
          that.tableData.data.unshift(newRowData)
        } else {
          for (const [rowIndex, rowData] of that.tableData.data.entries()) {
            if (parseInt(rowData.id) === parseInt(field.id)) {
              that.tableData.data.splice(rowIndex, 1, newRowData)
              break
            }
          }
        }
        table.reload(that.tableData.id, { data: that.tableData.data })
        layer.closeAll()
        that.bindSearchInputEvent()
        return false
      })
      // 给ID加入验证规则，不允许ID重复
      form.verify({
        id(value, item) {
          if (that.editType == "添加") {
            for (const rowData of that.tableData.data) {
              if (rowData.id === parseInt(value)) {
                item.value = ''
                return "ID重复，请重新设置ID"
              }
            }
          }
        }
      })

      table.render({
        elem: '#tableDemo',
        // url:'/v2/static/json/table/demo1.json',
        data: that.tableData.data,
        id: that.tableData.id,
        cols: that.tableCols,
        toolbar: '.toolbar',
        defaultToolbar: false,
        page: true,
        totalRow: true,
        editTrigger: 'dblclick',
        text: { none: '暂无相关数据' }
      })

      table.on('toolbar(tableDemo)', function (obj) {
        const checkStatus = table.checkStatus(obj.config.id)
        const checkData = checkStatus.data
        switch (obj.event) {
          case 'search':
            that.searchTable(table, obj.config.page.count)
            break
          case 'add':
            that.addTableRow($, form)
            break
          case 'delete':
            that.deleteTableRow(checkData, table)
            break
        }
      })

      table.on('tool(tableDemo)', function (obj) {
        // 双击 toolDouble
        const data = obj.data
        if (obj.event === 'del') {
          layer.confirm('确认删除这一行吗?', function (index) {
            obj.del()
            for (const [rowIndex, rowData] of that.tableData.data.entries()) {
              if (rowData.id === data.id) {
                that.tableData.data.splice(rowIndex, 1)
                break
              }
            }
            // 发送请求
            layer.close(index)
          })
        } else if (obj.event === 'edit') {
          that.editType = "编辑"
          that.openPrompt($)
          that.editTableRow(data, form, laytpl)
        }
      })

      laydate.render({
        elem: '.join-time'
      })
    })

    const searchInput = document.querySelector(
      '.search-container input.serach-value'
    )
    searchInput.addEventListener('input', function (e) {
      that.searchValue = e.target.value
    })
  }
}
</script>

<style>
input:disabled {
  border: 1px solid #DDD;
  background-color: #F5F5F5;
  color: #ACA899;
  opacity: 1;
  cursor: no-drop;
}

sup {
  color: red;
}

.layui-table-tool-temp {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.layui-table-tool-temp .search-container {
  display: flex;
  align-items: center;
}

.layui-table-tool-temp .search-container .layui-form {
  display: flex;
}

#add-table-row-template .layui-input-block>.layui-input {
  width: 70%;
}

#add-table-row-template .layui-input-block>textarea {
  width: 70%;
}

#add-table-row-template .layui-form-item .layui-input-inline {
  width: 28%;
}

#add-table-row-template .layui-form-label {
  padding-top: 4px;
}
</style>