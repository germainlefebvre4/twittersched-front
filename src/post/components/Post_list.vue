<template>
  <div>
    <v-container fluid d-flex class="grid">
      <v-card v-for="post in posts.data" :key="post.id" class="card">
        <v-card-title>{{ post.title | capitalize }}</v-card-title>
        <v-card-text>
          <div class="text--primary">
            {{ post.message }}
          </div>
        </v-card-text>
      </v-card>

    </v-container>
  </div>
</template>

<script>

export default {
  name: "postList",
  props: ["posts"],


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
