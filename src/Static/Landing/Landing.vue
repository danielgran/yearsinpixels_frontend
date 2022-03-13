<template>
  <div class="landing">
    <div class="page">

      <div class="middle">
        <h1>Wie war dein Tag?</h1>
        <router-link to="/login">
          <button class="btn-big">Erzähl es mir!</button>
        </router-link>
      </div>
    </div>
    <div class="page">
      <img class="bg-img-photo-spoiler" src="@/Assets/preview.png">

    </div>
    <div class="page">
      <div id="one">
        <div>
          <h2>Was ist ein „Year in Pixels“?</h2>
        </div>
        <div class="content">
          <p class="font-normal">
            Mit einem „Year in Pixels“ kannst du jedem Tag eines Jahres eine ganz spezielle Farbe zuordnen. Egal ob
            fantastisch, sehr gut oder auch mal traurig — jede Stimmung hat eine eigene passende Farbe.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Landing from "./Landing";

export default Landing;
</script>

<style scoped src="./Landing.css"/>
