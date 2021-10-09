<!-- TODO make a overall category component and dependency inject the values of them-->
<template>
  <div>
    <div id="profile">
      <p class="cattitle">Profile Picture</p>
      <ProfilePicture />
      <Catbox
        categoryName="Personal Data"
        :preferences="[
          { name: 'E-Mail', value: 'sag.ich@net.de', displayEdit: true },
          { name: 'Username', value: 'danielkillergriller', displayEdit: true },
        ]"
      />
      <Catbox
        categoryName="Safety"
        :preferences="[
          { name: 'Password', value: '*********', displayEdit: true },
          { name: '2FA', value: 'Authy', displayEdit: true },
        ]"
      />
      <Catbox
        categoryName="Additional"
        :preferences="[
          { name: 'Request Data', displayEdit: false, CSSname: 'color: blue' },
          { name: 'Delete Account', displayEdit: false, CSSname: 'color: red' },
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Profile from "./Profile";

export default Profile;
</script>

<style scoped src="./Profile.css"></style>
