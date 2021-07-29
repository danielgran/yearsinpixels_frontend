<template>
  <div id="app">
    <p>{{ testdata }}</p>
    <Header id="header" />
    <router-view id="main-view" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from '@/static/Header/Header.vue'
import DefaultStore from "./VueStore/Store/DefaultStore";

export default defineComponent({
  name: "App",
  components: {
    Header
  },

  data: function() {

    this.$store.commit('mockday');
    
    console.log(this.$store)
    return {
      testdata: this.$store.state.name
    }
  },


});
</script> 