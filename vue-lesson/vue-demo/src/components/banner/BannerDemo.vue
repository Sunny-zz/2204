<template>
  <div>
    <div class="banner">
      <div class="imgs">
        <img
          :class="{ active: index === currentInd }"
          v-for="(img, index) in imgs"
          :key="img.id"
          :src="img.src"
          alt=""
        />
      </div>
      <!-- 定位banner的左下 li 就是 15*15的圆 -->
      <div class="pagination">
        <ul>
          <li
            v-for="(img, index) in imgs"
            :key="img.id"
            @click="change(index)"
            :class="{ active: index === currentInd }"
          ></li>
        </ul>
      </div>
      <!-- 就是一个矩形框 50*100  大于号小于号在里面居中 -->
      <div @click="prev" class="prev arrow">＜</div>
      <div @click="next" class="next arrow">＞</div>
    </div>
    <button @click="handleClick(4,$event)">测试事件对象</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          id: 1,
          src: "https://imgcps.jd.com/ling4/100033268517/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02f9d0/6bf54173/cr/s/q.jpg",
        },
        {
          id: 2,
          src: "https://imgcps.jd.com/ling4/100039924870/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa02/d5ec43ed/cr/s/q.jpg",
        },
        {
          id: 3,
          src: "https://imgcps.jd.com/ling4/100018005951/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa71/afe8ea3c/cr/s/q.jpg",
        },
        {
          id: 4,
          src: "https://imgcps.jd.com/ling4/100037028253/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa09/a2d5bcf0/cr/s/q.jpg",
        },
      ],
      currentInd: 0,
    };
  },

  // methods 内写的方法不一定都是事件，
  // template 事件的绑定写法
  // 1. <div @click="handleClick"></div>
  // 2. <div @click="handleClick(参数)"></div>
  // 3. <div @click="currentInd = 2"></div>    只能直接写修改 data 的操作，不需要通过 this.xxx
  // 4. <div @click="() => {修改data的操作}"></div>
  // 5. <div @click="function() {修改data的操作}"></div>
  // 4,5 修改data 的时候无需通过 this.data名 修改  直接  data名 = 值  修改即可

  // 如何获取事件对象

  methods: {
    // 如何获取点击的到底是第几个 li
    // 1. 如果 li 是v-for循环生成的那么循环的时候会有 index ，直接将下标当作参数传递给事件，事件内就你可以获取到是第几个了
    // 2. 如果是四个li都是直接写在页面上的，可以直接传递数字传递给事件，事件内就你可以获取到是第几个了
    change(num) {
      this.currentInd = num;
    },
    prev() {
      if (this.currentInd === 0) {
        this.currentInd = this.imgs.length - 1;
      } else {
        this.currentInd--;
      }
    },
    next() {
      if (this.currentInd === this.imgs.length - 1) {
        this.currentInd = 0;
      } else {
        this.currentInd++;
      }
    },
    // 如果该事件函数不需要传递参数，那么事件默认会接收 event 作为参数
    // handleClick(event){
    //   console.log(event)
    // }
    // 如果该事件函数传递了参数，那么需要在 template 中也将 event 传递，在 template 中使用 $event 当作事件对象
    handleClick(num, event){
      console.log(num)
      console.log(event)
    }
  },
};
</script>

<style>
.banner {
  width: 590px;
  height: 470px;
  position: relative;
  margin: 100px auto;
}

.imgs img {
  display: block;
  width: 590px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}

.imgs img.active {
  z-index: 1;
  opacity: 1;
}

.pagination {
  position: absolute;
  left: 20px;
  bottom: 30px;
  z-index: 2;
}

.pagination ul {
  list-style: none;
}

.pagination ul li {
  float: left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
}

.pagination ul li.active {
  background-color: rgb(9, 106, 144);
}

.pagination ul li + li {
  margin-left: 5px;
}

.arrow {
  width: 50px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  font-size: 20px;
  z-index: 2;
  user-select: none;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>