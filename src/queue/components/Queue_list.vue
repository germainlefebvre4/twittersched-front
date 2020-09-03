<template>
  <div>

    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="queue in queues.data"
        :key="queue.id"
      >
        <v-expansion-panel-header>{{ queue.name | capitalize }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Post :queueId="queue.id" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>


    <v-container fluid d-flex class="grid">
      <v-card v-for="queue in queues.data" :key="queue.id" class="card">
        <v-card-title>{{ queue.name | capitalize }}</v-card-title>
        <v-card-subtitle>{{ queue.cron }}</v-card-subtitle>
        <v-card-text>
          <div class="text--primary">
            <Post :queueId="queue.id" />
          </div>
        </v-card-text>
      </v-card>
    </v-container>
    
  </div>
</template>

<script>
import Post from "../../post/views/Post.vue";

export default {
  name: "queueList",
  props: ["queues"],
  components: {
    Post,
  },

  data: () => ({
  }),

  methods: {
    async saveQueue() {
      console.log("this.queueName");
      console.log(this.queueName, this.queueCron);
      await postQueue(this.queueName, this.queueCron);
    },
  },

  mounted() {
    if (localStorage.access_token) {
      this.access_token = localStorage.access_token;
    }
    if (localStorage.refresh_token) {
      this.refresh_token = localStorage.refresh_token;
    }
  },

  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
};
</script>

<style>
.row {
  margin: 0;
}

.grid {
  flex-wrap: wrap;
}

.card {
  width: 30vw;
  margin: 1vw;
  box-sizing: border-box;
}

.card-value {
  font-family: monospace, monospace;
}
</style>
