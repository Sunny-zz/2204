<template>
  <button :class="`btn ${type}`">{{txt}}{{a}}{{b}}</button>
</template>

<script>
export default {
  props: ['txt', "type", "a", "b"]
}
</script>

<style>
  .btn{
    border: none;
    outline: none;
    padding: 12px 30px;
    background-color: rgb(21, 73, 179);
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
  }

  .btn.primary{
    background-color: rgb(27, 151, 18);
  }

  .btn.secondary{
    background-color: rgb(36, 135, 215);
  }
</style>