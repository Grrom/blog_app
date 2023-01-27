<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
  <template v-slot:activator="{ props }">
    <v-btn
      :color="color"
      v-bind="props"
      v-on:click="showDialog"
    >
     {{ buttonText }} 
    </v-btn>
  </template>
  <v-card>
    <v-card-title class="text-h5">
      {{ question }}
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="green-darken-1"
        variant="text"
        @click="confirm"
      >
        Confirm
      </v-btn>
      <v-btn
        color="green-darken-1"
        variant="text"
        @click="dialog = false"
      >
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-dialog>
</template>
<script lang="ts">

export default {
  name:"ConfirmDialog",
  props:{
    question: String,
    color: String,
    buttonText: String,
    onConfirm: Function,
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods:{
    confirm(){
        if(this.onConfirm!==undefined) this.onConfirm!();
        this.dialog = false
    },
    showDialog(){
        this.dialog = !this.dialog
    }
  }
}
</script>