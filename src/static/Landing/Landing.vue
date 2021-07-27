<template>
  <div>
    <div id="landing">
      <div id="background">
        <img src="@/assets/icon_512_8bit.png" class="imgbgblur" />
        <img src="@/assets/icon_512_8bit.png" class="imgbgblur" />
      </div>
      <div id="container">
        <div id="content">
          <div id="middle">
            <h1>Wie war dein Tag?</h1>
            <router-link to="/dashboard">
              <button>Erzähl es mir!</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Landing from "./Landing";

export default Landing;
</script>

<style scoped src="./Landing.css">
</style>