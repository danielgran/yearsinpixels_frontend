import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "AddDay",
  computed: mapState([
    'show_add_day_in_dashboard',
    'moods'
  ]),
  data: function () {
    return {
      box_title: "",
      box_notes: "",
      selected_mood_id: 0
    };
  },
  methods: {
    send: function() {
      this.$store.commit("SetShowDialogInDashboard", false);
    }
  }
});
