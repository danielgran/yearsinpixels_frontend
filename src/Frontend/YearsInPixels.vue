<template>
  <div>
    <div id="app">
      <Header id="header"/>
      <router-view id="main-view"/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import Header from "@/Static/Header/Header.vue";
import Footer from "@/Static/Footer/Footer.vue";

export default defineComponent({
  name: "YearsInPixels",
  components: {
    Footer,
    Header,
  },
  mounted() {
    document.title = "yearsinpixels.de | For Elina"
  },
  data: function () {
    return {
      state: this.$store.state,
    };
  },
});
</script>
<style scoped src="./YearsInPixels.css"/>
