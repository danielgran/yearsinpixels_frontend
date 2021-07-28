<template>
  <div v-if="shouldRender">
    <div id="header">
      <div class="header-item">
        <a>
          <router-link to="/">
            <img id="logo" src="@/assets/icon_512_8bit.png" />
          </router-link>
        </a>
      </div>
      <div>
        <p>
          {{ title }}
        </p>
      </div>
      <div class="header-item">
        <span>
          <i class="fas fa-user-circle" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "./Header";

export default Header;
</script>

<style scoped src="./Header.css">
</style>