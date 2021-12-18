<template>
  <div v-if="show_add_day_in_dashboard">
    <div>
      <div id="addDay">
        <div id="content">
          <h2>Your day was...</h2>
          <form>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Notes"> </textarea>
            <input type="button" value="Send" @click="send"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AddDay from "./AddDay";

export default AddDay;
</script>

<style scoped src="./AddDay.css"/>
