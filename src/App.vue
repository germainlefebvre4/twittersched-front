<template>
  <div id="app">
    <v-app id="inspire">
      <MyHeader />
      <div class="content">
        <router-view></router-view>
      </div>
      <MyFooter />
    </v-app>
  </div>
</template>

<script>
import MyHeader from "./views/MyHeader.vue";
import MyFooter from "./views/MyFooter.vue";

export default {
  name: "App",

  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding-top: 72px;
  height: calc(100vh);
  overflow: auto;
}
</style>
