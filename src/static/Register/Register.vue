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
            v-model="box1"
          />
          <input
            tabindex="1"
            type="password"
            placeholder="Password"
            v-model="box2"
          />
          <input
            tabindex="2"
            type="password"
            placeholder="Repeat password"
            v-model="box3"
          />
          <input
            tabindex="3"
            type="button"
            value="Register"
            v-on:click="loginUser"
          />
        </form>
        <router-link to="/login">
          <a>Login instead</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Register from "./Register";

export default Register;
</script>

<style scoped src="./../Login/Login.css">
</style>