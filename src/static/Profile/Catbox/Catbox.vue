<template>
  <div>
    <div class="catbox">
      <p class="cattitle">
        {{categoryname}}
      </p>
      <div class="editbox" v-for="preference in preferences" :key="preference">
        <p>{{preference.name}}</p>
        <div class="editvars">
          <p>{{preference.value}}</p>
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