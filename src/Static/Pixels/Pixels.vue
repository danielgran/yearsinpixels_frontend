<template>
  <div>
    <div id="pixels">
      <div id="content">
        <PixelTable class="space_bottom" :year_to_display="new Date().getFullYear()" id="table"/>
        <div id="agenda">
          <h5>Legende</h5>
          <div id="agendatable">
            <table>
              <tr v-for="mood in moods" :key="mood.id">
                <td>
                  <span :style="{backgroundColor: to_hex(mood.color)}" class="agendapoint">
                  </span>
                </td>
                <td>{{ mood.title }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Login from "./Pixels";

export default Login;
</script>

<style scoped src="./Pixels.css"/>
