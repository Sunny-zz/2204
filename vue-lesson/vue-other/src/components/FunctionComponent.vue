
<script>
// 函数式组件
// 如果该组件不接受父组件的 props 就直接展示 死的内容，可以直接写 template 加上 functional
export default {
  functional: true,
  render(h, context) {
    return h(
      "ul",
      context.props.list.map((item) => h("li", { key: item.id }, item.txt))
    );
  },
};
</script>

<style>
</style>