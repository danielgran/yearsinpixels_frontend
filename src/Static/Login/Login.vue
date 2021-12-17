<template>
  <div>
    <div id="login">
      <div id="loginbox">
        <img src="@/Assets/logo-primary-transparent.png" style="width: 158px" />
        <form class="userform login">
          <input tabindex="0" type="text" placeholder="E-Mail" v-model="box_email" />
          <input tabindex="1" type="password" placeholder="Password" v-model="box_password" />
          <input tabindex="2" type="button" value="Login" v-on:click="loginUser" />
        </form>
        <router-link to="/register">
          <a>Register instead</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Login from "./Login";

export default Login;
</script>

<style scoped src="./Login.css" />
