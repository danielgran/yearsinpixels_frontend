import { defineComponent } from 'vue'


export default defineComponent({
  name: "PixelTable",
  inject: ['rrrr'],
  data: function() {
    console.log(this.rrrr);
    return {
      months: [
        { name: "Jan" },
        { name: "Feb" },
        { name: "Mar" },
        { name: "Apr" },
        { name: "May" },
        { name: "Jun" },
        { name: "Jul" },
        { name: "Aug" },
        { name: "Sep" },
        { name: "Okt" },
        { name: "Nov" },
        { name: "Dez" }
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