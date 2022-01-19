<template>
  <div>
    <div id="addDay">
      <div id="content">
        <div id="close" v-on:click="$emit('close')">
          <h2>Your day was...</h2>
          <span>
            <i class="editIcon fas fa-times"/>
          </span>
        </div>
        <form>
          <input v-model="box_title" type="text" placeholder="Title"/>
          <textarea v-model="box_notes" placeholder="Notes"/>
          <select v-model="selected_mood1_object" :style="select_box1_background_color">
            <option value="" disabled selected>Auswählen</option>
            <option v-for="mood in moodbox1" :key="mood.id" :value="mood">
              {{ mood.title }}
            </option>
          </select>
          <div id="divider" @click="change_divider()">
            <p>(und…)</p>
            <span v-if="divider_opened">
                <i class="editIcon fas fa-chevron-up"/>
              </span>
            <span v-if="!divider_opened">
                <i class="editIcon fas fa-chevron-down"/>
            </span>
          </div>
          <select v-if="divider_opened" v-model="selected_mood2_object" :style="select_box2_background_color">
            <option value="" disabled selected>Auswählen</option>
            <option v-for="mood in moodbox2" :key="mood.id" :value="mood">
              {{ mood.title }}
            </option>
          </select>
          <input type="button" value="Abschicken" @click="send" :style="send_button_color"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AddDay from "./AddDay";

export default AddDay;
</script>

<style scoped src="./AddDay.css"/>
