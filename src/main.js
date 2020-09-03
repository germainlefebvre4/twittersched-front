import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import App from './App.vue'
import Application from './application/views/Application.vue'
import Queue from './queue/views/Queue.vue'
import Post from './post/views/Post.vue'
import dotenv from 'dotenv'

dotenv.config()


// Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { name: 'application', path: '/', component: Application },
  { name: 'queue', path: '/queues', component: Queue },
  { name: 'post', path: '/posts', component: Post },
]

const router = new VueRouter({
  routes: routes
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
