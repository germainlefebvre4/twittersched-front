<template>
  <div id="app">
    <v-app id="inspire">
      <MyHeader />
      <div class="content">
        <div v-if="authenticated" v-on:click="logout()">
          Logout
        </div><br />
        <router-view></router-view>
      </div>
      <MyFooter />
    </v-app>
  </div>
</template>

<script>
import MyHeader from "./views/MyHeader.vue";
import MyFooter from "./views/MyFooter.vue";
import AuthLogin from "./auth/views/login.vue";

export default {
  name: "App",

  components: {
    MyHeader,
    MyFooter,
  },

  data: () => ({
    authenticated: localStorage.getItem("authenticated"),
  }),

  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },

  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout: function() {
      AuthLogin.methods.logout(this);
    },
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
