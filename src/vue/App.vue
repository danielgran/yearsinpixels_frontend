<template>
  <div id="app">
    <p>{{wow}}</p>
    <Header id="header" />
    <router-view id="main-view" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from '@/static/Header/Header.vue'

export default defineComponent({
  name: "App",
  components: {
    Header
  },

  data: function() {
    console.log(this.$store)
    return {
      wow: this.$store.state.name
    }
  }
});
</script>