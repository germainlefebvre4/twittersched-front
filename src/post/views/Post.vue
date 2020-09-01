<template>
  <div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/Post_list.vue";

import { getPosts } from "../services/post.service";

export default {
  name: "post",
  components: {
    PostList,
  },
  props: ['queueId'],
  data: () => ({
    posts: [],
  }),
  mounted() {
    this.fetchApps();
  },
  methods: {
    async fetchApps() {
      this.posts = await getPosts(this.queueId);
    },
  },
};
</script>

<style></style>
