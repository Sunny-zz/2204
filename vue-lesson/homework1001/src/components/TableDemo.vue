<template>
  <div>
    <div class="table-search">
      <input ref="search" type="text" />
      <button @click="search">搜索</button>
      <button @click="addBook">添加</button>
    </div>
    <table>
      <thead>
        <th>序号</th>
        <th>时间</th>
        <th>标题</th>
        <th>作者</th>
        <th>重要性</th>
        <th>阅读数</th>
        <th>操作</th>
      </thead>
      <tbody>
        <!-- 需要根据数据生成 -->
        <tr v-for="book in showBooks" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.time }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>
            <!-- v-for 也可以循环数字 就相当于次数 -->
            <svg
              v-for="i in book.importance"
              :key="i"
              t="1665278184192"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2587"
              width="16"
              height="16"
            >
              <path
                d="M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z"
                p-id="2588"
              ></path>
            </svg>
          </td>
          <td>{{ book.reading }}</td>
          <td>
            <button @click="edit(book)">编辑</button
            ><button @click="del(book.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-show="showDialog" class="dialog-wrap">
      <div class="dialog">
        <div class="dialog-head">
          <h2>{{ isEditing ? "Edit" : "Create" }}</h2>
          <span @click="cancel">×</span>
        </div>
        <div class="dialog-content">
          <div class="time">
            <label for="time">时间</label>
            <input v-model="book.time" type="text" id="time" />
          </div>
          <div class="title">
            <label for="title">标题</label>
            <input v-model="book.title" type="text" id="title" />
          </div>
          <div class="author">
            <label for="author">作者</label>
            <input v-model="book.author" type="text" id="author" />
          </div>
          <div class="importance">
            <label for="importance">重要性</label>
            <input
              v-model.number="book.importance"
              type="text"
              id="importance"
            />
          </div>
        </div>
        <div class="dialog-foot">
          <button @click="cancel">取消</button>
          <button @click="ok">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// script 中的在 template 用 直接用即可
// script 中的在 script 用需要加 this
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          time: "2022-09-09 12:25",
          title: "Kqse Ekkiwuk Empjuefcq Xtnmnpp Yremjopq Liykprsf aaa",
          author: "Tom",
          importance: 2,
          reading: 2000,
        },
        {
          id: 2,
          time: "2021-08-08 11:25",
          title:
            "Ekkiwuk Kubhdjfv Empjuefcq Kqse Xtnmnpp Yremjopq Liykprsf aaa bbb",
          author: "Jack",
          importance: 3,
          reading: 2461,
        },
        {
          id: 3,
          time: "2020-07-07 10:25",
          title: " Hmpjuefcq Xtnmnpp Tjdsfverf Yremjopq Liykprsf ccc",
          author: "Tim",
          importance: 4,
          reading: 1480,
        },
        {
          id: 4,
          time: "2019-06-06 09:25",
          title:
            " Xtnmnpp Yremjopq Kqse Ekkiwuk Empjuefcq Yhjbrfv Liykprsf ccc ddd eee",
          author: "Lili",
          importance: 6,
          reading: 5800,
        },
      ],
      searchText: "",
      showDialog: false,
      book: {
        time: "",
        title: "",
        author: "",
        importance: 1,
        reading: 0,
      },
      isEditing: false,
    };
  },
  computed: {
    showBooks() {
      const { searchText } = this;
      return this.books.filter((book) => book.title.includes(searchText));
    },
  },
  methods: {
    del(id) {
      this.books = this.books.filter((book) => book.id !== id);
    },
    search() {
      this.searchText = this.$refs.search.value;
    },
    open() {
      this.showDialog = true;
      // 弹窗出现之后需要隐藏滚动条  隐藏滚动条需要给 body 添加样式 oh
      // 在当前组件 的 tempalte 是找不到 body，所以需要使用 原生 document
      window.document.body.style.overflowY = "hidden";
      window.document.body.style.paddingRight = "17px";
    },
    close() {
      this.showDialog = false;
      window.document.body.style.overflowY = "auto";
      window.document.body.style.paddingRight = "0px";
      this.book = {
        time: "",
        title: "",
        author: "",
        importance: 1,
        reading: 0,
      };
    },
    addBook() {
      this.isEditing = false;
      this.open();
    },
    cancel() {
      this.close();
    },
    ok() {
      const { time, title, author, importance } = this.book;
      const { books, isEditing } = this;
      if (time && title && author && importance) {
        // 要区分什么时候是编辑什么时候是添加
        if (!isEditing) {
          // 添加
          // this.book.id = books[books.length - 1].id + 1
          this.books.push({ ...this.book, id: books[books.length - 1].id + 1 });
        }else{
          // 编辑
          // 编辑的时候需要将数组内的某一个书籍数据替换了
          // 但是我们直接用 数组[n] = 编辑的 或者直接找到数组中的对象直接修改   都不可行  页面不会更新，这是因为 vue 对于数组的更新做的限制
          // 需要使用 vue 提供的 set 来更新
          let currentBookInd = this.books.findIndex(book => book.id === this.book.id) 
          // this.$set(被修改的数组， 下标， 修改的值)
          this.$set(this.books, currentBookInd, this.book)
        }

        this.close();
      } else {
        alert("请输入内容之后在提交");
      }
    },

    edit(book) {
      this.open();
      // 如果直接将 book (原书籍数据) 给到 this.book  也就是直接编辑了原书籍， v-model修改直接会变,希望是点击确定之后才会变
      // 那么 要将 原书籍的拷贝 给到  this.book
      this.book = {...book};
      this.isEditing = true;
    },
  },
};
</script>

<style>
table {
  width: 1200px;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 10px;
}

.dialog-wrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
}

.dialog {
  width: 600px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 200px;
  background-color: #fff;
}

.dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dialog-content > div {
  margin: 20px 0;
}

.dialog-foot {
  display: flex;
  justify-content: flex-end;
}
</style>