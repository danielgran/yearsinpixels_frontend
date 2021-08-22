<template>
  <div>
    <div class="profilepicture">
      <div class="picture">
        <img :src="linkPicture" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProfilePicture from "./ProfilePicture";

export default ProfilePicture;
</script>

<style scoped src="./ProfilePicture.css" />
