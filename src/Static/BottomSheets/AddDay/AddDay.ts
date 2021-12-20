import {defineComponent} from "vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "AddDay",
  computed: {
    ...mapState([
               'show_add_day_in_dashboard',
               'moods'
             ]),
    send_button_color: function () {
      if (this.selected_mood_object == null)
        return 'background: grey;';
      return "background: #3c79fa";

    },
    select_box_background_color: function() {
      if (this.selected_mood_object == null)
        return 'background-color: rgb(221, 221, 221);';
      // @ts-ignore
      let color = this.selected_mood_object.color;
      color = color.toString(16);

      return 'background-color: #' + color + ';';
    }
  },
  data: function () {
    return {
      box_title: "",
      box_notes: "",
      selected_mood_object:  null,
      send_button_enabled: false
    };
  },
  methods: {
    send: function() {
      if (this.selected_mood_object == null)
        return;

    },
    close: function () {
      this.$store.commit("SetShowDialogInDashboard", false);
    }
  }
});
