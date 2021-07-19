<template>
  <div id="app">
    <Header id="header">
    </Header>
    <router-view id="main-view"/>
  </div>
</template>

<script lang="js">
import Header from "@/components/Header";
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
/****************/
/* Standard Styling */
/****************/
html, body , h1, h2, h3, h4, h5, h6, button {
  margin: 0;
  padding: 0;
  border: none;
}
* {
  font-family: basic-sans, Arial, sans-serif;
}

a {
  outline: none;
  color: #3C1EFA;
  text-decoration: none !important;
  font-size: 1.1rem;
}

a:hover {
  cursor: pointer;
  color: #3C79FA;
  text-decoration: none;
}


/****************/
/* Input Styling*/
/****************/

button {
  font-size: 1.1rem;
  font-weight: bold;
  background: #3C1EFA;
  color: #ECECEC;
  padding: 5px 20px;
  border-radius: 20px;
}


input, textarea {
  font-size: 1.2rem;
}

/* Width repair */
input[type=text], input[type=password], textarea {
  box-sizing: border-box;
  font-size: 1.2rem;
}

/* Size matching of different input types */
input[type=text], input[type=password], input[type=button], textarea {
  border: none;
  padding: 15px 20px;
  border-radius: 30px;
}

/* Remove standard outlines (they are odd) */
input[type=text]:focus, input[type=password]:focus, textarea {
  outline: none;
}

/* Placeholder color */
input[type=text]::placeholder, input[type=password]::placeholder, textarea::placeholder {
  color: gray;
  font-weight: bold;
}

/* Button Color styling */
input[type=button] {
  color: #ECECEC;
  background: #3C1EFA;
}

/* Button hover and click effect*/
input[type=button]:hover {
  background: #3C79FA;
  cursor: pointer;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ECECEC;
}

#header {
  height: auto;
}

#main-view {
  overflow: hidden;
  height: 100%;
  width: 100vw;
}


</style>
