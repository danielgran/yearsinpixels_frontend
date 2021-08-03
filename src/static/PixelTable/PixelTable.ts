import { defineComponent } from 'vue'


export default defineComponent({
  name: "PixelTable",
  data: function() {
    return {
      months: [
        { name: "Jan" },
        { name: "Feb" },
        { name: "Mar" },
        { name: "April" },
        { name: "May" },
        { name: "Jun" },
        { name: "Jul" },
        { name: "August" },
        { name: "September" },
        { name: "Oktober" },
        { name: "November" },
        { name: "Dezember" }
      ]
    };
  },
  methods:
  {
    randomColor() {
      const r = () => Math.floor(256 * Math.random());

      let rgb =  `rgb(${r()}, ${r()}, ${r()})`;
      return rgb;
    }
  }
})