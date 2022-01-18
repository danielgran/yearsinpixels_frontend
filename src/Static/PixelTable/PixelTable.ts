import {defineComponent} from "vue";
import Day from "@/Model/Day";
import Cookies from "js-cookie";

const isEqual = (date1: Date, date2: Date) => {
  return date1.getDate() == date2.getDate() &&
    date1.getMonth() == date2.getMonth() &&
    date1.getFullYear() == date2.getFullYear()
}

export default defineComponent({
  name: "PixelTable",
  props: {
    year_to_display: {
      required: true,
      type: Number
    }
  },
  data: function () {
    return {
      months: [
        {name: "Jan", num: 1},
        {name: "Feb", num: 2},
        {name: "Mär", num: 3},
        {name: "Apr", num: 4},
        {name: "Mai", num: 5},
        {name: "Jun", num: 6},
        {name: "Jul", num: 7},
        {name: "Aug", num: 8},
        {name: "Sep", num: 9},
        {name: "Okt", num: 10},
        {name: "Nov", num: 11},
        {name: "Dez", num: 12},
      ],
      days_from_statemanagement: new Map<string, Day>()
    };
  },
  methods: {
    get_color_for_day: function (month: number, day: number) {
      let dat = new Date(this.year_to_display, month - 1, day);
      let color = "none";
      //.linear-gradient(to bottom right, #fff 0%, #fff 50%, green 50%, green 100%);background: linear-gradient(to bottom right, #fff 0%, #fff 50%, green 50%, green 100%);
      try {
        let days = this.$store.state.days;
        for (const day_in_stmgt of days) {
          if (isEqual(dat, new Date(day_in_stmgt.Date))) {
            if (day_in_stmgt.mood2.id == 0)
              return "#" + day_in_stmgt.mood1.color.toString(16);
            console.log(day_in_stmgt);
            let c1 = day_in_stmgt.mood1.color.toString(16);
            let c2 = day_in_stmgt.mood2.color.toString(16)
            return "linear-gradient(to top left, transparent 0%, transparent 49%, #" + c1 + " 49%, #" + c1 + " 100%)," +
              "linear-gradient(to bottom right, transparent 0%, transparent 49%, #" + c2 + " 49%, #" + c2 + " 100%)";
          }
        }
        return color;
      } catch (e) {
        return "red";
      }
    }
  },
});
