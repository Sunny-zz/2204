<template>
  <div class="tabs-wrap">
    <div class="tabs">
      <div class="tabs-nav">
        <ul>
          <!-- <li @click="handleClick(index)" v-for="(tab, index) in tabs" :key="tab.id">{{tab.title}}</li> -->
          <li @click="tabIndex = index" v-for="(tab, index) in tabs" :key="tab.id">{{tab.title}}</li>
        </ul>
      </div>
      <div class="tabs-content">
        <!-- 570 * 100 -->
        <div v-for="(tab, index) in tabs" :key="tab.id" :style="{backgroundColor: tab.styleColor}" :class="['tab-content', {show: index === tabIndex}]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabs: [
        {
          id: 1,
          title: '家用电器',
          // 改颜色是内容的背景色
          styleColor: 'teal'
        },
        {
          id: 2,
          title: '手机通讯',
          styleColor: 'blue'
        },
        {
          id: 3,
          title: '电脑数码',
          styleColor: 'pink'
        }
      ],
      tabIndex: 0
    }
  },
  methods: {
    handleClick(index){
      this.tabIndex = index
    }
  }
}
</script>

<style>
  .tabs {
    width: 570px;
    margin: 0 auto;
    border: 1px solid #ccc;
  }
  .tabs-nav {
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .tabs-nav ul {
    list-style: none;
    display: flex;
  }
  .tabs-nav ul li + li {
    margin-left: 20px;
  }
  .tab-content{
    width: 570px;
    height: 100px;
    display: none;
  }
  .show {
    display: block;
  }
</style>