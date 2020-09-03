<template>
  <div>
    <ApplicationList :applications="applications" />
  </div>
</template>

<script>
import ApplicationList from "../components/Application_list.vue";

export default {
  name: "application",
  components: {
    ApplicationList,
  },
  data: () => ({
    applications: [],
  }),
  mounted() {
  },
  methods: {
  },
};
</script>

<style></style>
