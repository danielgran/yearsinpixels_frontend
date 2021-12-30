<template>
  <div>
    <div id="register">
      <div id="registerbox">
        <img src="@/Assets/logo-primary-transparent.png" style="width: 158px"/>
        <form class="userform register">
          <input tabindex="0" @click="execute_captcha" type="text" placeholder="E-Mail" v-model="box_email"/>
          <input tabindex="1" @click="execute_captcha" type="password" placeholder="Password" v-model="box_password1"/>
          <input tabindex="1" @click="execute_captcha" type="password" placeholder="Password" v-model="box_password2"/>
          <input tabindex="2" @click="registerUser" type="button" value="Registrieren" />
          <!--<vue-recaptcha ref="recaptcha"
                         size="invisible"
                         sitekey="6LeVFcMdAAAAAGO2lC3ZfZtjzekvKwTjHwzU13ev" @verify="captcha_callback"></vue-recaptcha>
        -->
        </form>
        <router-link to="/login">
          <a>
            Login instead
          </a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Register from "./Register";

export default Register;
</script>

<style scoped src="./Register.css"/>
