<template>
  <div>
    <div id="dashboard">
      <div id="container">
        <div id="content">
          <div id="greeting">
            <h4>Hallo,</h4>
            <h3>Wheetel</h3>
          </div>
          <div id="date">
            <h3>Heute ist der</h3>
            <h1>13</h1>
            <h2>07</h2>
            <h2>2021</h2>
          </div>
          <div id="daystatus">
            <p>Dein heutiger Tag war <b style="color: #07E878">fantastisch</b>.</p>
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

<style>
@import "./Dashboard.css";
</style>