<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: basic-sans, Arial, sans-serif;
}
html, body , h1, h2, h3, h4, h5, h6, button {
  margin: 0;
  padding: 0;
  border: none;
}

button {
  font-size: 1.1rem;
  font-family: basic-sans, Arial;
  font-weight: bold;
  background: #3C1EFA;
  color: #ECECEC;
  padding: 5px 20px;
  border-radius: 20px;
}

</style>
