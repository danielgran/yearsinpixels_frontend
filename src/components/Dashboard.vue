<template>
  <div>
    <div id="dashboard">
      <div id="container">
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
            <img src="@/assets/icon_512_8bit.png" id="imageAddDay"/>
          </button>
        </div>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ECECEC;
  height: 100%;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ECECEC;
  max-width: 960px;
  width: 100%;
  height: inherit;
  box-shadow: 0px 0px 100px rgba(1,1,1, 0.1);
  border-radius: 30px;
}

#content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#greeting {
  margin: 55px 0 0 78px
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
  font-size: 1.25rem;
  font-weight: 600;
}

#footer {
  height: 60px;
  width: 92%;
  background: #ECECEC;
  box-shadow: 0px 0px 22px rgba(1, 1, 1, 0.2);
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

#imageAddDay {
  width: 48px;
  transform: translate(-23%, 3%);
}

</style>