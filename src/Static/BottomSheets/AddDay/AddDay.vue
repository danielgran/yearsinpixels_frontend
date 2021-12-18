<template>
  <div v-if="show_add_day_in_dashboard">
    <div>
      <div id="addDay">
        <div id="content">
          <h2>Your day was...</h2>
          <form>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Notes">
            </textarea>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <input type="button" value="Abschicken" @click="send"/>
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
