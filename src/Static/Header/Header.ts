import {defineComponent} from 'vue'
import {mapState} from "vuex";
import Day from "@/Model/Day";

export default defineComponent({
  name: "Header",
  data: function () {
    return {
      shouldRender: true,
      title: "yearsinpixels.com"
    };
  },
  computed: {
    ...mapState({
      LoggedIn: function () {
        return this.$store.state.LoggedIn;
      },
    }),
  }
})