<template>
  <div id="container">
    <div id="header">
      <div class="header-item">
        <i class="fab -user-circle" />
      </div>
    </div>
    ffas
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
#container {
  background: #ECECEC;
  width: 100vw;
  min-height: 100vh;
}

#header {
  width: 100vw;
  height: 40px;
  background: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-item {
  margin: 0 10px;
}

</style>