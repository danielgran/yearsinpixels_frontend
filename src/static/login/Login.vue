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
            v-model="cnt_box1"
          />
          <input
            tabindex="1"
            type="password"
            placeholder="Password"
            v-model="cnt_box2"
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
import Login from "./Login";

export default Login;
</script>

<style scoped src="./Login.css">
</style>