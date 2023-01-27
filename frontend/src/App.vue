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

      <!-- <v-btn
        v-on:click="test"
        target="_blank"
        text
      >
        <span class="mr-2">Create Blog</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn> -->
      <CreateBlogForm/>
    </v-app-bar>


    <v-main>
    </v-main>
  </v-app>
</template>

<script>

import CreateBlogForm from "./components/CreateBlogForm"
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    CreateBlogForm,
    // HelloWorld
  },

  data: () => ({
    showAlert: false
  }),
  methods:{
    test: function(){
      this.showAlert=!this.showAlert
    }
  }
};
</script>
