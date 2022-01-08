<template>
  <div>
    <div id="login">
      <div id="loginbox">
        <img src="@/Assets/logo-primary-transparent.png" style="width: 158px"/>
        <form class="userform login">
          <input ref="focusMe" tabindex="0" @click="execute_captcha" type="text" placeholder="E-Mail" v-model="box_email"/>
          <input tabindex="1" @click="execute_captcha" type="password" placeholder="Password" v-model="box_password"/>
          <input tabindex="2" @click="loginUser" type="button" value="Login"/>
          <!--<vue-recaptcha ref="recaptcha"
                         size="invisible"
                         sitekey="6LeVFcMdAAAAAGO2lC3ZfZtjzekvKwTjHwzU13ev" @verify="captcha_callback"></vue-recaptcha>
        --></form>
        <router-link to="/register">
          <a>
            Register instead
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Login from "./Login";

export default Login;
</script>

<style scoped src="./Login.css"/>
