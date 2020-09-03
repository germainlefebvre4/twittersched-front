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
                  v-model="queueId"
                  label="Queue ID*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="postTitle"
                  label="Title*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="postMessage"
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
            v-on:click="savePost"
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    


    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/Post_list.vue";

import { getPosts } from "../services/post.service";
import { postPost } from "../services/post.service";

export default {
  name: "post",
  components: {
    PostList,
  },
  props: ['queueId'],
  data: () => ({
    posts: [],
    dialog: false,
    postTitle: "",
    postMessage: "",
  }),
  mounted() {
    this.fetchApps();
  },
  methods: {
    async fetchApps() {
      this.posts = await getPosts(this.queueId);
    },
    async savePost() {
      console.log("function savePost()");
      console.log(this.queueId, this.postTitle, this.postMessage);
      await postPost(this.queueId, this.postTitle, this.postMessage);
    },

  },
};
</script>

<style></style>
