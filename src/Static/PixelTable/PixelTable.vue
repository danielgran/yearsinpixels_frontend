<template>
  <div>
    <div id="pixeltable">
      <h2>{{ year_to_display }}</h2>
      <div id="tablewrapper">
        <table>
          <th/>
          <th v-for="month in months" :key="month">
            {{ month.name }}
          </th>
        </table>
        <table>
          <tr></tr>
          <tr v-for="day in 31" :key="day">
            <td>
              <!-- This represents the day column on the left hand side -->
              {{ day }}
            </td>
            <td v-for="month in months" :key="month.id">
              <!-- This is the needed information for the days
              {{day}}.
              {{month.name}}
              -->
              <div class="daypixel" :style="{ backgroundColor: get_color_for_day(month.num, day) }"></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PixelTable from "./PixelTable";

export default PixelTable;
</script>

<style scoped src="./PixelTable.css"></style>
