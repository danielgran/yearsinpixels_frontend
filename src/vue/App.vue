<template>
  <div id="app">
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
  }
});
</script>

<style>
@import "../static/css/style.css";
</style>
