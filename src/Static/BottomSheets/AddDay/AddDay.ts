import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "AddDay",
  computed: mapState([
    'show_add_day_in_dashboard'
  ]),
  methods: {
    send: function() {
      this.$store.commit("SetShowDialogInDashboard", false);
    }
  }
});
