<template>
  <div v-if="shouldRender">
    <div id="header">
      <div class="header-item">
        <a>
          <router-link to="/">
            <img id="logo" src="@/Assets/icon_512_8bit.png" />
          </router-link>
        </a>
      </div>
      <div>
        <router-link to="/">
          <p id="title">
            {{ title }}
          </p>
        </router-link>
      </div>
      <div class="header-item">
        <router-link to="/logout" v-show="LoggedIn">
          <span>
            <i class="fas fa-sign-out-alt fa-sm" />
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Header from "./Header";

export default Header;
</script>

<style scoped src="./Header.css" />
