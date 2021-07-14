<template>
  <div>
    <div id="landing">
      <div id="background">
        <img src="@/assets/icon_512_8bit.png" class="imgbgblur" />
        <img src="@/assets/icon_512_8bit.png" class="imgbgblur"/>
      </div>
      <div id="container">
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
  </div>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style scoped>
#landing {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#container {
  background: #ECECEC;
  height: 100%;
  width: 100%;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
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

#background {
  position: absolute;
  z-index: 11;
  transform: translate(-50%);
}

.imgbgblur {
  opacity: 0.2;
  width: 800px;
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