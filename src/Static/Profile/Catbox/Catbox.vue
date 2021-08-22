<template>
  <div>
    <div class="catbox">
      <p class="cattitle">
        {{ categoryName }}
      </p>
      <div class="editbox" v-for="preference in preferences" :key="preference">
        <p :style="preference.CSSname">{{ preference.name }}</p>
        <div class="editvars">
          <p class="preferenceValue">{{ preference.value }}</p>
          <span v-if="preference.displayEdit">
            <i class="editIcon fas fa-pencil-alt fa-sm" />
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

<style scoped src="./Catbox.css" />
