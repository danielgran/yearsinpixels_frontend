<template>
  <div>
    <div id="dashboard">
      <div id="container">
        <div id="content">
          <div id="greeting">
            <h4>Hallo, </h4>
            <h3>{{ LocalUser.email }}</h3>
          </div>
          <div id="date">
            <h3>Heute ist der</h3>
            <h1>{{ date_today.getDate() }}</h1>
            <h2>{{ date_today.getMonth() + 1 }}</h2>
            <h2>{{ date_today.getFullYear() }}</h2>
          </div>
          <div id="daystatus">
            <p v-if="!today_logged">Erfasse deinen heutigen Tag!</p>
            <div v-if="today_logged">
              <p>Dein Tag war heute</p>
              <b v-bind:style="today_mood1_color">{{ today_mood1_title }}</b>
              <div v-if="today_mood2_title !== ''">
                <p>und</p>
                <b v-bind:style="today_mood2_color">{{ today_mood2_title }}</b>
              </div>
            </div>
          </div>
          <div v-if="!today_logged" id="add_day" @click="open_add_day">
            <img src="@/Assets/icon_512_8bit.png">
          </div>
          <div id="addaywrap" v-if="show_add_day">
            <AddDay :date_to_add="new Date()" @close="handle_addday_update"></AddDay>
          </div>
          <div id="link_to_pixel_table">
            <router-link to="/pixels">
              <b>Pixeltabelle</b>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Dashboard from "./Dashboard";

export default Dashboard;
</script>

<style scoped src="./Dashboard.css"/>
