<template>
  <div>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>

      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Tweeter post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
  
              <v-col cols="12">
                <v-text-field
                  v-model="queueName"
                  label="Titre*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="queueCron"
                  label="Message*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            v-on:click="saveQueue"
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    


    <QueueList :queues="queues" />
  </div>
</template>

<script>
import QueueList from "../components/Queue_list.vue";

import { getQueues } from "../services/queue.service";
import { postQueue } from "../services/queue.service";

export default {
  name: "queue",
  components: {
    QueueList,
  },
  data: () => ({
    queues: [],
    dialog: false,
    queueName: "",
    queueCron: "",
    dialog: false,
  }),
  mounted() {
    this.fetchApps();
  },
  methods: {
    async fetchApps() {
      this.queues = await getQueues();
    },
    async saveQueue() {
      console.log("function saveQueue()");
      console.log(this.queueName, this.queueCron);
      await postQueue(this.queueName, this.queueCron);
    },

  },
};
</script>

<style></style>
