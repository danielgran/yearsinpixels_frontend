import {defineComponent} from "vue";
import {mapState} from "vuex";
import Day from "@/Model/Day";

export default defineComponent({
  name: "AddDay",
  props: {
    date_to_add: {
      required: true,
      type: Date
    }
  },
  computed: {
    ...mapState([
      'moods'
    ]),
    send_button_color: function () {
      if (this.selected_mood_object == null)
        return 'background: grey;';
      return "background: #3c79fa";

    },
    select_box_background_color: function () {
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
      selected_mood_object: null,
      send_button_enabled: false
    };
  },
  methods: {
    send: async function () {
      if (this.selected_mood_object == null)
        return;

      let day = new Day();
      day.Date = this.date_to_add;
      day.Title = this.box_title;
      day.Notes = this.box_notes;
      day.mood1 = this.selected_mood_object;
      
      await this.$store.dispatch("addDay", {day: day, user_guid: this.$store.state.LocalUser.guid});
      this.$emit("close");
    }
  }
});
