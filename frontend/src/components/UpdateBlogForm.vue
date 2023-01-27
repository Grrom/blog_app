<template>
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          v-on:click="openDialog"
        >
         Update 
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Blog</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-col
              cols="12"
              sm="12"
              md="6"
            >
              <v-text-field
                label="Blog Title*"
                v-model="title"
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <v-textarea
                v-model="content"
                label="Content*"
                required
              ></v-textarea>
            </v-col>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="updatePost"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script lang="ts">
import AlertHelper from '@/helpers/AlertHelper'
import ApiHelper from '@/helpers/ApiHelper'
import BlogModel from '@/types/BlogModel'

  export default {
    name:"UpdateBlogForm",
    props:{
      item:{
        type:BlogModel,
        required:true,
      } 
    },
    data: () => ({
      title:"",
      content:"",
      dialog: false,
    }),
    mounted(){
      console.log("mounted")
      this.title = this.item.title
      this.content = this.item.content
      console.log(this.title)
    },
    methods:{
      openDialog: function(){
          this.dialog=true
      },
      updatePost:function(){
        this.dialog=false
        const loading = AlertHelper.showLoading("Saving Post.")
        const updatedPost = new BlogModel(this.item.id, this.title, this.content, this.item.dateCreated)
        ApiHelper.updateBlog(updatedPost.id,updatedPost.title, updatedPost.content, updatedPost.dateCreated).then((_)=>{
          loading.close()
          AlertHelper.successToast("Post updated successfully.")
          this.$emit("updated", updatedPost)
        }).catch(e=>loading.close())
      }
    }
  }
</script>