import {defineComponent} from "vue";
import Day from "@/Model/Day";

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
      if (month == 2 && day > 28) {
        return "none"
      }
      try {
        let days = this.$store.state.days;
        let a = days.find(i => i.Date.getTime() == dat.getTime())
        if (a) {

          console.log(month + "." + day)
          if (a.mood2.id == 0)
            return "#" + a.mood1.color.toString(16);
          let c1 = a.mood1.color.toString(16);
          let c2 = a.mood2.color.toString(16)
          return "linear-gradient(to top left, transparent 0%, transparent 50%, #" + c1 + " 50%, #" + c1 + " 100%)," +
            "linear-gradient(to bottom right, transparent 0%, transparent 50%, #" + c2 + " 50%, #" + c2 + " 100%)";
        }
        return color;
      } catch (e) {
        return "black";
      }
    }
  },
});
