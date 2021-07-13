<template>
  <div id="landing">
    <div id="container">
      <img src="@/assets/icon_512_8bit.png" class="imgbgblur" />
      <img src="@/assets/icon_512_8bit.png" class="imgbgblur"/>
      <div id="header">
        <div class="header-item">
          <a>
            <img src="@/assets/icon_512_8bit.png" style="width: 32px" />
          </a>
        </div>
        <div class="header-item">
          <button>
            Zur App
          </button>
        </div>
      </div>
      <div id="content">
        <div id="middle">
          <h1>Wie war dein Tag?</h1>
          <router-link to="/dashboard">
            <button>Erzähl es mir!</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style scoped>

#container {
  position: fixed;
  background: #ECECEC;
  height: 100vh;
  width: 100vw;
}

#header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}
#header button {
  font-family: basic-sans;
  font-weight: bold;
  font-size: 0.8rem;
  background: #3C1EFA;
  padding: 4px 20px;
  color: #ECECEC;
  border-radius: 14px;
}

.header-item {
  margin: 0 10px;
}
#landing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#middle {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#middle button {
  width: 180px;
}

.imgbgblur {
  position: absolute;
  float: none;
  opacity: 0.2;
  width: 800px;
  z-index: -9999;
}

.imgbgblur:nth-of-type(1) {
  transform: rotate(220deg);
  left: 50%;
  top: -10%;
  width: 1000px;
}

.imgbgblur:nth-of-type(2) {
  transform: rotate(-40deg);
  right: 50%;
  bottom: -10%;
  width: 1200px;
}
</style>