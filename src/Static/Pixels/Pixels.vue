<template>
  <div>
    <div id="pixels">
      <div id="content">
        <h2>{{ year }}</h2>
        <PixelTable id="table" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Login from "./Pixels";

export default Login;
</script>

<style scoped src="./Pixels.css" />
