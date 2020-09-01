<template>
  <div>
    <ApplicationList :applications="applications" />
  </div>
</template>

<script>
import ApplicationList from "../components/Application_list.vue";

import { getApplications } from "../services/application.service";

export default {
  name: "application",
  components: {
    ApplicationList,
  },
  data: () => ({
    applications: [],
  }),
  mounted() {
    this.fetchApps();
  },
  methods: {
    async fetchApps() {
      this.applications = await getApplications();
    },
  },
};
</script>

<style></style>
