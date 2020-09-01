<template>
  <div>
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
