<template>
  <div v-if="show_add_day_in_dashboard">
    <div>
      <div id="addDay">
        <div id="content">
          <h2>Your day was...</h2>
          <form>
            <input v-model="box_title" type="text" placeholder="Title"/>
            <textarea v-model="box_notes" placeholder="Notes"/>
            <select v-model="selected_mood_id">
              <option v-for="mood in moods" :key="mood.id" :value="mood.id">
                {{ mood.title }}
              </option>
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
