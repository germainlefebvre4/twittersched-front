<template>
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="email" v-model="email" placeholder="Username" />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
import { authLogin } from "../services/auth.service.js";

export default {
  name: 'Login',

  data: () => ({
      email: "",
      password: "",
      authenticated: false,
      access_token: "",
      refresh_token: "",
  }),

  methods: {
    login() {
      if(this.email != "" && this.password != "") {
        return authLogin(this.email, this.password).then(response => {
          if(response.status == 200 && response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token)
            localStorage.setItem("refresh_token", response.data.refresh_token)
            localStorage.setItem("authenticated", true)
            this.$router.push("queues");
          } else {
              console.log("The email and/or password is incorrect");
          }
        })
      } else {
          console.log("An email and password must be present");
      }
    },

    logout: function(vue) {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        vue.$router.push("login");
    },

    persist() {
      localStorage.access_token = this.access_token;
      localStorage.access_token = this.refresh_token;
      localStorage.authenticated = this.authenticated;
    }
  },

  mounted() {
      if (localStorage.access_token) {
        this.access_token = localStorage.access_token;
      }
      if (localStorage.refresh_token) {
        this.refresh_token = localStorage.refresh_token;
      }
      if (localStorage.authenticated) {
        this.authenticated = localStorage.authenticated;
      }
  },

  watch: {
      access_token(access_token) {
        localStorage.access_token = access_token;
      },
      refresh_token(refresh_token) {
        localStorage.refresh_token = refresh_token;
      },
      authenticated(authenticated) {
        localStorage.authenticated = authenticated;
      },
  },

}
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>
