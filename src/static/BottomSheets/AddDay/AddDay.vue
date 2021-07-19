<template>
  <div>
    <div v-bind:class="{background: opened}">
    </div>
    <div id="addDay">
      <div id="content">
        <h2>Your day was...</h2>
        <form>
          <input type="text" placeholder="Title">
          <textarea placeholder="Notes">
        </textarea>
          <input type="button" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AddDay from "@/static/BottomSheets/AddDay/AddDay.vue"
export default AddDay
</script>

<style scoped>
@import "./AddDay.css";
</style>