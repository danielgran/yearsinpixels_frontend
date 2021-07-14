<template>
  <div>
    <div id="header" v-if="shouldRender">
      <div class="header-item">
        <a>
          <router-link to="/">
            <img src="@/assets/icon_512_8bit.png" style="width: 48px" />
          </router-link>
        </a>
      </div>
      <div>
        <p>
          yearsinpixels.com
        </p>
      </div>
      <div class="header-item">
          <span style="color: #C08FC2; font-size: 24px">
            <i class="fas fa-user-circle" style="padding: 0; margin: 0"/>
          </span>
      </div>

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
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
}

.header-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 14px 0 14px;
}
</style>