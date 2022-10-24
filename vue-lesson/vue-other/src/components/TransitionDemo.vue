<template>
  <div>
    <h3>进入和离开的过渡</h3>
    <button @click="show = !show">切换</button>
    <transition name="fade">
      <div v-show="show" class="box"></div>
    </transition>
    <hr />
    <button @click="show1 = !show1">切换1</button>
    <transition
      name="rotate"
      appear
      appear-class="fade-appear"
      appear-to-class="fade-appear-to"
      appear-active-class="fade-appear-active"
    >
      <div v-show="show1" class="box"></div>
    </transition>
    <hr />
    <div style="margin-left: 200px">
      <transition name="move" mode="out-in">
        <!-- 多个元素的动画每个人需要不同key   -->
        <!-- 可以使用 mode 修改动画模式 -->
        <button @click="show2 = true" v-if="!show2" key="on">on</button>
        <button @click="show2 = false" v-else key="off">off</button>
      </transition>
    </div>
    <hr />
    <button @click="del">随机删除</button>
    <button @click="add">添加</button>
    <transition-group name="slide" tag="ul" style="margin-left: 200px;list-style: none;">
      <li style="float: left;margin-left: 10px;" v-for="i in arr" :key="i">{{ i }}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show1: true,
      show2: true,
      arr: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    del() {
      this.arr.splice(3, 1)
    },
    add(){
      this.arr.push(9)
    }
  },
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  margin-left: 200px;
}

/* 离开的三个类名 */
/* .fade-leave {
  opacity: 1;
}  */ /*刚刚离开  就是元素默认的样式 可以省略*/
.fade-leave-active {
  transition: all 1s;
} /* 离开在执行 */
.fade-leave-to {
  transform: translateX(200px);
  opacity: 0;
} /* 离开结束 */

/* 进入的三个类名 */
.fade-enter {
  opacity: 0;
  transform: translateY(-200px);
}
.fade-enter-active {
  transition: all 1s;
}
/* .fade-enter-to {}  */
/* 进入结束， 元素出现的默认样式 可以省略 */

/* 消失的动画 */
@keyframes rotateOut {
  0% {
    transform: rotate(0) scale(1);
  }
  30% {
    transform: rotate(360deg) scale(1.5);
  }
  100% {
    transform: rotate(1020deg) scale(0);
  }
}

@keyframes rotateIn {
  0% {
    transform: rotate(1020deg) scale(0);
  }
  70% {
    transform: rotate(360deg) scale(1.5);
  }
  100% {
    transform: rotate(0) scale(1);
  }
}

.rotate-leave-active {
  animation: rotateOut 2s linear;
}

.rotate-enter-active {
  animation: rotateIn 2s linear;
}

.fade-appear {
  opacity: 0;
}
.fade-appear-active {
  transition: all 2s;
}

.move-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.move-enter {
  opacity: 0;
  transform: translateX(20px);
}
.move-enter-active,
.move-leave-active {
  transition: all 0.5s;
}

.slide-enter {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
</style>