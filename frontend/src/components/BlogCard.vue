<template>
    <div class="blog-card">
        <div class="blog">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
        </div>
        <v-container>
            <v-btn color="primary">
                update
            </v-btn>
            <v-btn color="secondary">
                delete
            </v-btn>
        </v-container>
    </div>
</template>

<script>
import BlogModel from '@/types/BlogModel.js';

export default {
  name:"BlogCard",
  props:{
      item: BlogModel
  },
  data: () => ({
    dialog: false,
  }),
  methods:{
      openDialog: function(){
          console.log("open")
          this.dialog=true
      }
  }
}
</script>

<style scoped>

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
}

.v-btn{
    margin: 4px;
}

.blog-card{
    margin:  16px 0;
    background-color: white;
    border-radius: 12px;
    padding: 20px;
}

</style>