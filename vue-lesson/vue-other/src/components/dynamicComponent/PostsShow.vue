<template>
  <div class="posts">
    <div class="left-nav">
      <ul>
        <li v-for="(post, index) in posts" @click="showPostIndex = index" :key="post.id">{{ post.title }}</li>
      </ul>
    </div>
    <div class="right-content">
      <p>{{ showPostIndex === -1 ? 'Click on a blog title to the left to view it.' : showContent }}</p>
    </div>
    <!-- <div class="x"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Cupcake Ipsum",
          content:
            "Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.",
        },
        {
          id: 2,
          title: "Hipster Ipsum",
          content:
            "Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.",
        },
        {
          id: 3,
          title: "Cat Ipsum",
          content:
            "Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around",
        },
      ],
      showPostIndex: -1
    };
  },
  computed: {
    showContent() {
      return this.posts[this.showPostIndex].content
    }
  },
};
</script>

<style scoped>
/* 所有组件的样式默认都是全局的，可以加 scoped 变成组件自己特有的 */
/* 加了 scoped 之后组件内的所有标签都会有一个  data-v-xxxx 的属性，书写的样式利用的都是这个属性选择器书写的 */
/* .x {
  width: 100px;
  height: 100px;
  background-color: #ccc;
} */
.posts {
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
}

.left-nav {
  width: 120px;
  border-right: 1px solid #ccc;
  flex-shrink: 0;
}
.right-content{
  flex-grow: 1;
}
.left-nav ul {
  list-style: none;
}
.left-nav ul li{
  cursor: pointer;
}
</style>