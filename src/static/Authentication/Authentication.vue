<template>
  <div id="login">
    <div id="container">
      <div id="loginbox">
        <img src="@/assets/logo-primary-transparent.png" style="width: 223px" />
        <form class="userform login">
          <input
            tabindex="0"
            type="text"
            placeholder="E-Mail"
            v-model="box2"
          />
          <input
            tabindex="1"
            type="password"
            placeholder="Password"
            v-model="box2"
          />
          <input
            tabindex="2"
            type="button"
            value="Login"
            v-on:click="loginUser"
          />
        </form>
        <a>Register instead</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Authentication from "./Authentication";

export default Authentication;
</script>

<style scoped src="./Authentication.css">
</style>