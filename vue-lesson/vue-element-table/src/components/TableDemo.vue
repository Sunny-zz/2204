<template>
  <div class="table">
    <div class="table-search">
      <el-input
        v-model.trim="searchText"
        placeholder="请输入标题"
        clearable
      ></el-input>
      <el-select v-model="searchImportance" placeholder="请选择" clearable>
        <el-option v-for="item in 3" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <el-select v-model="searchCountory" placeholder="请选择" clearable>
        <el-option
          v-for="item in countorys"
          :key="item"
          :label="item"
          :value="item"
        >
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="search"
        >搜索</el-button
      >
      <el-button type="primary" icon="el-icon-edit" @click="open"
        >添加</el-button
      >
    </div>
    <br />
    <br />
    <div class="table-content">
      <el-table :data="showData" border style="width: 100%" v-loading='loading'>
        <el-table-column prop="id" label="序号" width="80"> </el-table-column>
        <el-table-column prop="time" label="时间" width="180">
        </el-table-column>
        <el-table-column prop="title" label="标题"> </el-table-column>
        <el-table-column label="重要性" width="120">
          <template v-slot="{ row }">
            <el-rate
              :value="row.importance"
              disabled
              :max="row.importance"
              :colors="[
                'rgb(57, 56, 56)',
                'rgb(57, 56, 56)',
                'rgb(57, 56, 56)',
              ]"
            >
            </el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="作者" width="80">
        </el-table-column>
        <el-table-column prop="visitCount" width="80" label="阅读数">
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template v-slot="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : 'info'">{{
              row.status
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210">
          <template v-slot="{ row }">
            <el-button size="mini" type="primary" @click="open(row)"
              >编辑</el-button
            >
            <el-button
              v-if="row.status !== 'published'"
              size="mini"
              type="success"
              @click="changeStatus(row.id, 'published')"
              >发布</el-button
            >
            <el-button v-else size="mini" @click="changeStatus(row.id, 'draft')"
              >草稿</el-button
            >
            <el-popconfirm
              style="margin-left: 10px"
              title="这是一段内容确定删除吗？"
              @confirm="del(row.id)"
              placement="top"
            >
              <el-button slot="reference" size="mini" type="danger"
                >删除</el-button
              >
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :title="dialogTitle"
        :visible="dialogFormVisible"
        @close="close"
      >
        <el-form
          :rules="rules"
          :model="data"
          ref="myForm"
          label-position="right"
          label-width="80px"
        >
          <el-form-item label="类型" prop="countory">
            <el-select v-model="data.countory" placeholder="Please select">
              <el-option
                v-for="item in countorysOther"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间" prop="time">
            <el-date-picker
              v-model="data.time"
              type="datetime"
              placeholder="选择日期时间"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="标题" prop="title">
            <el-input v-model="data.title"></el-input>
          </el-form-item>
          <el-form-item label="作者" prop="author">
            <el-input v-model="data.author"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="data.status" placeholder="请选择活动区域">
              <el-option label="published" value="published"></el-option>
              <el-option label="draft" value="draft"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性">
            <el-rate
              v-model="data.importance"
              :max="3"
              :colors="[
                'rgb(57, 56, 56)',
                'rgb(57, 56, 56)',
                'rgb(57, 56, 56)',
              ]"
            >
            </el-rate>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="ok">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>


<script>
import moment from "moment";
export default {
  data() {
    return {
      searchText: "",
      searchImportance: "",
      countorys: ["China(CN)", "USA(US)", "Japan(JP)", "Eurozone(EU)"],
      countorysOther: ["China", "USA", "Japan", "Eurozone"],
      searchCountory: "",
      tableData: [],
      // 点击搜索才会改变的
      searchObj: {
        searchText: "",
        searchImportance: "",
        searchCountory: "",
      },
      dialogFormVisible: false,
      data: {
        time: "",
        title: "",
        countory: "",
        author: "",
        importance: 1,
        visitCount: 300,
        status: "published",
      },
      rules: {
        countory: [{ required: true, message: "请输入类别", trigger: "blur" }],
        time: [{ required: true, message: "请输入时间", trigger: "change" }],
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        author: [{ required: true, message: "请输入作者", trigger: "blur" }],
      },
      dialogTitle: "create",
      loading: false
    };
  },
  computed: {
    showData() {
      const { searchText, searchImportance, searchCountory } = this.searchObj;
      if (!searchText && !searchImportance && !searchCountory) {
        return this.tableData;
      }
      return this.tableData.filter(
        (ele) =>
          ele.title.includes(searchText) &&
          (searchImportance ? ele.importance === searchImportance : true) &&
          (searchCountory ? searchCountory.includes(ele.countory) : true)
      );
    },
  },
  async created() {
    const res = await this.$http.get("/book");
    // console.log(res)
    this.tableData = res;
  },
  methods: {
    // 删除 
    async del(id) {
      this.loading = true
      await this.$http.delete(`/book/${id}`)
      this.tableData = this.tableData.filter((ele) => ele.id !== id);
      this.loading = false
      this.$notify({
        title: "成功",
        message: "删除成功",
        type: "success",
        duration: 1000,
      });

    },
    async changeStatus(id, newStatus) {
      this.loading = true
      await this.$http.patch(`/book/${id}`, {status: newStatus})
      this.loading = false
      this.tableData.find((ele) => ele.id === id).status = newStatus;
    },
    search() {
      const { searchText, searchImportance, searchCountory } = this;
      this.searchObj = {
        searchText,
        searchImportance,
        searchCountory,
      };
    },
    open(data) {
      // 如果没有传递 data 的话默认 data 是事件对象，判断的时候需要注意
      this.dialogFormVisible = true;
      // 要判断是添加弹窗还是编辑弹窗
      if (data.id) {
        // 编辑
        this.dialogTitle = "edit";
        // console.log(data);
        // 修改的时候 如果直接赋值的话  v-model 修改 data 的时候原数据也会跟着变化，这样是不对的，需要点击确定才改变 
        this.data = {...data};
      } else {
        this.dialogTitle = "create";
        // 做添加功能时 获取当前时间展示在表格的日期组件中
        // console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
        this.data.time = moment().format("YYYY-MM-DD HH:mm:ss");
      }
    },
    close() {
      this.dialogFormVisible = false;
      this.data = {
        title: "",
        countory: "",
        author: "",
        importance: 1,
        visitCount: 300,
        status: "published",
        // 时间不要修改 一旦修改了就会触发校验，关闭的时候没有必须要校验
        time: this.data.time,
      };
    },
    ok() {
      // vue 的 js 内最外层函数可以写成普通函数，内层必须都是箭头函数，才能获取 this
      this.$refs.myForm.validate(async (res) => {
        if (res) {
          // 验证成功 添加还是编辑需要判断
          // this.data.id       this.dialogTitle
          const {id} = this.data
          if (id) {
            await this.$http.patch(`/book/${id}`, this.data)
            let currentDataIndex = this.tableData.findIndex(ele => ele.id === id) 
            this.tableData.splice(currentDataIndex, 1, this.data)
          } else {
            const newBook = await this.$http.post(`/book`,this.data)
            // console.log(newBook)
            this.tableData.push(newBook)
            // this.tableData.push({
            //   ...this.data,
            //   id: this.tableData[this.tableData.length - 1].id + 1,
            // });
          }

          this.close();
        }
      });
    },
  },
};
</script>

<style>
.table-search {
  display: flex;
}
.table-search .el-input {
  width: 200px;
}
.table-search .el-input .el-input__inner {
  width: 200px;
}
.table {
  width: 1200px;
}
.el-rate__item .el-rate__icon {
  margin-right: 0;
  font-size: 20px;
}
</style>