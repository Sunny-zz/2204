<template>
  <div class="swiper-demo">
    <swiper v-if="sliders.length" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in sliders" :key="item"
        >I'm Slide {{ item }}</swiper-slide
      >
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      sliders: [],
      swiperOption: {
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  created() {
    setTimeout(() => {
      this.sliders = [1, 2, 3, 4, 5, 6];
    }, 1000);
  }
};
</script>

<style>
.swiper-container {
  width: 600px;
  height: 300px;
}
</style>