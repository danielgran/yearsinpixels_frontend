import {defineComponent} from "vue";

import PixelTable from "@/Static/PixelTable/PixelTable.vue";
import {mapState} from "vuex";
import Cookies from "js-cookie";

export default defineComponent({
  name: "Pixels",
  components: {
    PixelTable,
  },
  computed: {
    ...mapState([
      'moods'
    ]),

  },
  methods: {
    to_hex(integer: Number) {
      let color = "#" + integer.toString(16);
      return color;
    }
  },
  beforeCreate() {
    this.$store.dispatch("refreshDays");
  },
});
