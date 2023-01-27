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
         Create a new Blog 
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
                required
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="12"
            >
              <v-textarea
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
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    name:"CreateBlogForm",
    data: () => ({
      dialog: true,
    }),
    methods:{
        openDialog: function(){
            console.log("open")
            this.dialog=true
        }
    }
  }
</script>