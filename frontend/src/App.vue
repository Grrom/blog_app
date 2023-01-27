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

      <CreateBlogForm v-on:addedPost="refreshPosts"/>
    </v-app-bar>

    <div class="loader-container" v-if="blogs===undefined || needsRefresh">
      <img class="loader" src="@/assets/loading.gif" alt="loading please wait...">
    </div>

    <v-main class="main">
      <v-col
        sm="12"
        md="10"
        lg="10">
        <BlogCard v-for="(x,_) in sortedBlogs" :item="x" :key="x.id" v-on:deleted="removePost" v-on:updated="updatePost"/>
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
    this.getBlogs()
  },

  data: () => ({
    blogs:undefined as Array<BlogModel> | undefined,
    needsRefresh: false,
  }),

  computed:{
    sortedBlogs(){
      return this.blogs?.sort((b,a)=>{
        return new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime();
      })
    }
  },

  methods:{
    refreshPosts(){
      this.needsRefresh=true
      this.getBlogs()
    },
    getBlogs(){
      ApiHelper.getBlogs().then(blogs=>{
        this.blogs=blogs
        this.needsRefresh=false
      })
    },
    removePost(id:string){
      let indexToRemove = this.getPostIndex(id);
      if(indexToRemove!==undefined){
        this.blogs?.splice(indexToRemove, 1);
      }
    },
    getPostIndex(id:string){
      let index = undefined;
      for(let i = 0; i< (this.blogs===undefined ? [] : this.blogs).length; i++){
        if(this.blogs![i].id === id){
          index = i;
          break;
        }
      }
      return index
    },
    updatePost(updated:BlogModel){
      this.removePost(updated.id)
      this.blogs?.push(updated)
    }
  }
};
</script>

<style scoped>
.main{
  background-color: #f0f0f0;
}

.loader-container{
  width: 100%;
  margin: auto;
  padding-top: 64px;
  background-color: #f0f0f0;
}

.loader{
  display: block;
  margin: auto;
}

.col{
  margin: auto;
}

</style>