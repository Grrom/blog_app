<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          class="shrink mr-2"
          contain
          src="@/assets/blog.svg"
          transition="scale-transition"
          width="40"
        />

        <v-banner text="Blog App">
          Blog App
        </v-banner>
      </div>

      <v-spacer></v-spacer>

      <CreateBlogForm/>
    </v-app-bar>

    <v-main class="main">
      <v-col
        sm="12"
        md="10"
        lg="10">
        <BlogCard v-for="(x,_) in blogs" :item="x" :key="_"/>
      </v-col>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import BlogModel from "./types/BlogModel"
import ApiHelper from "./helpers/ApiHelper"
import CreateBlogForm from "./components/CreateBlogForm.vue"
import BlogCard from "./components/BlogCard.vue"

export default {
  name: 'App',

  components: {
    CreateBlogForm,
    BlogCard
  },

  mounted(){
    ApiHelper.getBlogs()
  },

  data: () => ({
    blogs:[new BlogModel("2","title", "yeee"), new BlogModel("3","title", "hawwww")]
  }),
  methods:{
  }
};
</script>

<style scoped>
.main{
  background-color: #f0f0f0;
}

.col{
  margin: auto;
}

</style>