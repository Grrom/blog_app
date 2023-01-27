<template>
    <div class="blog-card">
        <div class="blog">
            <div class="title">{{ item?.title }}</div>
            <div class="content">{{ item?.content }}</div>
        </div>
        <v-container>
            <ConfirmDialog buttonText="Update" color="primary"/>
            <span class="custom-spacer"></span>
            <ConfirmDialog 
                buttonText="Delete" 
                question="Are you sure you want to delete this post?" 
                color="secondary" 
                :onConfirm="deletePost"
            />
        </v-container>
    </div>
</template>

<script lang="ts">
import AlertHelper from '@/helpers/AlertHelper';
import ApiHelper from '@/helpers/ApiHelper';
import BlogModel from '@/types/BlogModel';
import ConfirmDialog from './ConfirmDialog.vue';

export default {
  name:"BlogCard",
  props:{
    item: {
      type: BlogModel,
      required: true,
    },
  },
  components:{
    ConfirmDialog
  },
  methods:{
    deletePost:function(){
        const loading =  AlertHelper.showLoading("Deleting Post...");
        ApiHelper.deleteBlog(this.item.id).then(()=>{
            loading.close()
            this.$emit("deleted", this.item.id)
        }).catch(e=>{loading.close})
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

.custom-spacer{
    margin: 4px;
}

.blog-card{
    margin:  16px 0;
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 0 1px 0px #b0b0b0;
}

</style>