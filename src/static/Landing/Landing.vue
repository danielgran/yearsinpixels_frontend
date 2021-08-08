<template>
  <div class="landing">
    <div class="background">
      <img src="@/assets/icon_512_8bit.png" class="imgbgblur" />
      <img src="@/assets/icon_512_8bit.png" class="imgbgblur" />
    </div>
    <div class="middle">
      <h1>Wie war dein Tag?</h1>
      <router-link to="/dashboard">
        <button><p>Erzähl es mir!</p></button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Landing from "./Landing";

export default Landing;
</script>

<style scoped src="./Landing.css" />
