<template>
  <div id="app">
    <!--<p>localUser: {{ testdata }}</p>-->
    <Header id="header" />
    <router-view id="main-view" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/static/Header/Header.vue";

export default defineComponent({
  name: "YearsInPixels",
  components: {
    Header,
  },

  data: function() {
    this.$store.commit("mockday");
    return {
      testdata: this.$store.state,
    };
  },
});
</script>
<style scoped src="./YearsInPixels.css" />
