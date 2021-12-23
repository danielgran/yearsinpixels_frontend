<template>
  <div id="app">
    <Header id="header"/>
    <router-view id="main-view"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import Header from "@/Static/Header/Header.vue";

export default defineComponent({
  name: "YearsInPixels",
  components: {
    Header,
  },
  mounted() {
    document.title = "yearsinpixels.com | For Elina"
  },
  data: function () {
    return {
      state: this.$store.state,
    };
  },
});
</script>
<style scoped src="./YearsInPixels.css"/>
