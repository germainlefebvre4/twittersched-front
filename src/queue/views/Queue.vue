<template>
  <div>
    <QueueList :queues="queues" />
  </div>
</template>

<script>
import QueueList from "../components/Queue_list.vue";

import { getQueues } from "../services/queue.service";

export default {
  name: "queue",
  components: {
    QueueList,
  },
  data: () => ({
    queues: [],
  }),
  mounted() {
    this.fetchApps();
  },
  methods: {
    async fetchApps() {
      this.queues = await getQueues();
    },
  },
};
</script>

<style></style>
