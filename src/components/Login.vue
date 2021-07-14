<template>
  <div id="login">
    <div id="container">
      <div id="loginbox">
        <img src="@/assets/logo-primary-transparent.png" style="width: 200px" />
        <form class="userform login">
          <input tabindex="0" type="text" placeholder="E-Mail"/>
          <input tabindex="1" type="password" placeholder="Passwort"/>
          <input tabindex="2" type="button" value="Login"/>
        </form>
        <a href="#">
          Account erstellen
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: red;
}

#container {
  background: #ECECEC;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#loginbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
  width: 100vw;
  height: 100vh;
}

#loginbox a {
  font-weight: bold;
  margin-top: 20px;
}

@media only screen and (min-width: 735px)
{
  #loginbox {
    width: 100%;
    max-width: 625px;
    max-height: 480px;
    box-shadow: 0px 0px 100px rgba(1,1,1, 0.2);
    border-radius: 30px;

  }
}

.userform {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 0 0 5px 0;
  width: 400px;
}

.login {
  display: flex;
}

</style>