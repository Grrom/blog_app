<template>
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="secondary"
          v-bind="props"
          v-on:click="openDialog"
        >
         Create Blog 
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Create Blog</span>
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
            @click="savePost"
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

  export default {
    name:"CreateBlogForm",
    data: () => ({
      dialog: false,
      title:"",
      content:"",
    }),
    methods:{
      openDialog: function(){
          this.dialog=true
      },
      savePost:function(){
        console.log(this.title)
        console.log(this.content)
        this.dialog=false
        const loading = AlertHelper.showLoading("Saving Post.")
        ApiHelper.createBlog(this.title, this.content).then((_)=>{
          loading.close()
          AlertHelper.successToast("Post added successfully.")
          this.$emit("addedPost")
        }).catch(e=>loading.close())
      }
    }
  }
</script>