import {defineComponent} from 'vue'

export default defineComponent({
  name: "Footer",
  computed: {
    date_today: function () {
      return new Date()
    }
  }
})