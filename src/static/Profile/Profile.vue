<template>
  <div>
    <div id="profile">
      <Catbox categoryname="Personal Data" :preferences="[{name: 'E-Mail', value: 'sag.ich@net.de'}, {name: 'Username', value: 'danielkillergriller'}]" />
    </div>
  </div>
</template>

<script lang="ts">
import Profile from "./Profile";

export default Profile;
</script>

<style scoped src="./Profile.css">
</style>