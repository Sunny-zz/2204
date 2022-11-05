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
      <el-button type="primary" icon="el-icon-edit">添加</el-button>
    </div>
    <br />
    <br />
    <div class="table-content">
      <el-table :data="showData" border style="width: 100%">
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
            <el-button size="mini" type="primary">编辑</el-button>
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
      <el-dialog title="create" :visible.sync="dialogFormVisible">
        <el-form :model="data" label-position='right' label-width="80px">
          <el-form-item label="类型">
            <el-select v-model="data.countory" placeholder="Please select">
              <el-option
                v-for="item in countorys"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间">
            <el-date-picker
              v-model="data.time"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="data.title"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="data.status" placeholder="请选择活动区域">
              <el-option label="published" value="published"></el-option>
              <el-option label="draft" value="draft"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性">
            <el-rate
              :value="data.importance"
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
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchText: "",
      searchImportance: "",
      countorys: ["China(CN)", "USA(US)", "Japan(JP)", "Eurozone(EU)"],
      searchCountory: "",
      tableData: [],
      // 点击搜索才会改变的
      searchObj: {
        searchText: "",
        searchImportance: "",
        searchCountory: "",
      },
      dialogFormVisible: true,
      data: {
        time: "",
        title: "",
        countory: "",
        author: "",
        importance: 1,
        visitCount: 300,
        status: "published",
      },
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
    del(id) {
      this.tableData = this.tableData.filter((ele) => ele.id !== id);
      this.$notify({
        title: "成功",
        message: "删除成功",
        type: "success",
        duration: 1000,
      });
    },
    changeStatus(id, newStatus) {
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