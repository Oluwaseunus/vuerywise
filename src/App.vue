<template>
  <div id="app">
    <div class="bg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style lang="scss">
  #app {
    margin: auto;
  }

  .bg {
    background: #dde2e9;
    height: 25vh;
    float: right;
    width: 100vw;
  }
</style>