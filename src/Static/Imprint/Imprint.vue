<template>
  <div>
    <div id="imprint">
      <h1>Impressum</h1>
      <div>
        <h2 class="right-1">Betreiber</h2>
        <ul class="right-3">
          Daniel Gran<br/>
          Rudolf-Breitscheid Straße 7<br/>
          90547 Stein<br/>
          <br/>
          <a href="https://www.grandaniel.com">Private Website</a> <br/>
          <a href="mailto:yearsinpixels@grandaniel.com">E-Mail</a>
        </ul>
      </div>
      <div>
        <h2 class="right-1">Datenverarbeitung</h2>
        <ul class="right-3">
          Hinweise zur Datenverarbeitung können Sie <router-link to="/privacypolicy">hier</router-link> entnehmen.
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Imprint from "./Imprint";

export default Imprint;
</script>

<style scoped src="./Imprint.css"/>
