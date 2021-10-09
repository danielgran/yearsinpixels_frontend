import { defineComponent } from "vue";

import PixelTable from "@/Static/PixelTable/PixelTable.vue";

export default defineComponent({
  name: "Pixels",
  components: {
    PixelTable,
  },
  data: function() {
    return {
      year: "2020",
      box2: "",
      box3: "",
    };
  },
  methods: {},
});
