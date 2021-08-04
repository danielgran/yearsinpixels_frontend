<template>
  <div>
    <div class="catbox">
      <p class="cattitle">
        Personal Data
      </p>
      <div class="editbox">
        <p>E-Mail</p>
        <div class="editvars">
          <p>daniel.gran@mailbox.org</p>
          <span>
            <i class="fas fa-pen" />
          </span>
        </div>
      </div>
      <div class="editbox">
        <p>Username</p>
        <div class="editvars">
          <p>danielkillergriller</p>
         <span>
            <i class="fas fa-pen" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Catbox from "./Catbox";

export default Catbox;
</script>

<style scoped src="./Catbox.css">
</style>