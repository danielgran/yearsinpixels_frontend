<template>
  <div>
    <div id="dashboard">
      <div id="container">
        <div id="content">
          <div id="greeting">
            <h4>Hallo, </h4>
            <h3>{{ LocalUser.name_first }}</h3>
          </div>
          <div id="date">
            <h3>Heute ist der</h3>
            <h1>{{ date_day }}</h1>
            <h2>{{ date_month }}</h2>
            <h2>{{ date_year }}</h2>
          </div>
          <div id="daystatus">
            <p>Dein heutiger Tag war <b style="color: #07e878">fantastisch</b>.</p>
          </div>
            <div id="add_day" @click="open_add_day">
              <img src="@/Assets/icon_512_8bit.png">
            </div>

          <div id="addaywrap">
            <AddDay :date_to_add="new Date()"></AddDay>
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
