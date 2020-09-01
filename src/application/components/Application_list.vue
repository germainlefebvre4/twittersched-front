<template>
  <div>
    <v-container fluid d-flex class="grid">
      App
    </v-container>
  </div>
</template>

<script>

export default {
  name: "applicationList",
  props: ["applications"],


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
  width: 17.6vw;
  margin: 1vw;
  box-sizing: border-box;
}

.card-value {
  font-family: monospace, monospace;
}
</style>
