<template>
  <div id="dashboard">
    <div id="container">
      <div id="header">
        <div class="header-item">
          <a>
            <router-link to="/">
              <img src="@/assets/icon_512_8bit.png" style="width: 48px" />
            </router-link>
          </a>
        </div>
        <div class="header-item">
        <span style="color: #C08FC2; font-size: 24px">
          <i class="fas fa-user-circle" style="padding: 0; margin: 0"/>
        </span>
        </div>
      </div>
      <div id="content">
        <div id="greeting">
          <h4>Hallo,</h4>
          <h3>Wheetel</h3>
        </div>
        <div id="date">
          <h3>Heute ist der</h3>
          <h1>13</h1>
          <h2>07</h2>
          <h2>2021</h2>
        </div>
        <div id="daystatus">
          <p>Dein heutiger Tag war <b style="color: #07E878">fantastisch</b>.</p>
        </div>
      </div>
      <div id="footer">
        <button>
          <img src="@/assets/icon_512_8bit.png" style="width: 40px" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Dashboard",
  computed: {
    username() {
      return this.$store.getters.getName
    }
  }
}
</script>

<style scoped>
#dashboard {
  display: flex;
  justify-content: center;
}

#container {
  background: #ECECEC;
  height: 100vh;
  max-height: 100vh;
  min-width: 480px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 100px rgba(1,1,1, 0.5);
}

#header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.header-item {
  margin: 0 10px;
}

#content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#greeting {
  padding: 29px 78px;
}

#date {
  text-align: center;
  margin: 20px 0 0 0;
}

#daystatus {
  margin-top: 80px;
  text-align: center;
}

#daystatus p,b {
  font-size: 1.15rem;
}

#footer {
  height: 60px;
  box-shadow: 0px 0px 22px black;
  border-top-left-radius: 1.3rem 1.3rem;
  border-top-right-radius: 1.3rem 1.3rem;
  text-align: center;
}

h1 {
  font-size: 8.0rem;
  color: #C08FC2;
}

h2 {
  font-size: 1.7rem;
  color: #C08FC2;
}

h3 {
  font-size: 1.6rem;
  color: #C08FC2;
}

h4 {
  font-size: 1.3rem;
}

button {
  background: #3C1EFA;
  border-radius: 20px;
  height: 64px;
  width: 64px;
  position: absolute;
  transform: translate(-50%, -40%);
}



</style>