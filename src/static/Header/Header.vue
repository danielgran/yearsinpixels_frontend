<template>
  <div v-if="shouldRender">
    <div id="header">
      <div class="header-item">
        <a>
          <router-link to="/">
            <img src="@/assets/icon_512_8bit.png" style="width: 48px"/>
          </router-link>
        </a>
      </div>
      <div>
        <p>
          {{ title }}
        </p>
      </div>
      <div class="header-item">
          <span style="color: #C08FC2; font-size: 24px">
            <i class="fas fa-user-circle" style="padding: 0; margin: 0"/>
          </span>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Header from "./Header";

export default Header;
</script>

<style scoped>
@import "./Header.css";
</style>