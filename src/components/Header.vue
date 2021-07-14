<template>
  <div id="header" v-if="shouldRender">
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
</template>

<script>
export default {
  name: "Header",
  computed: {
    shouldRender() {
      let render = true;
      if(["Login"].includes(this.$route.name)) {
        render = false;
      }
      return render;
    }
  }
}
</script>

<style scoped>
#header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #ECECEC;
}

.header-item {
  margin: 0 10px;
}
</style>