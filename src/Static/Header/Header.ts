import {defineComponent} from 'vue'
import {mapState} from "vuex";

export default defineComponent({
  name: "Header",
  data: function () {
    return {
      shouldRender: true,
      title: "yearsinpixels.de"
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