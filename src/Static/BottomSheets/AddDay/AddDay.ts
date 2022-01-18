import {defineComponent} from "vue";
import {mapState} from "vuex";
import Day from "@/Model/Day";
import Mood from "@/Model/Mood";

export default defineComponent({
  name: "AddDay",
  props: {
    date_to_add: {
      required: true,
      type: Date
    }
  },
  beforeCreate() {
    this.selected_mood2_object = new Mood();
  },
  computed: {
    ...mapState([
      'moods'
    ]),
    send_button_color: function () {
      if (this.selected_mood1_object == null)
        return 'background: grey;';
      return "background: #3c79fa";

    },
    select_box1_background_color: function () {
      if (this.selected_mood1_object == null)
        return 'background-color: rgb(221, 221, 221);';
      // @ts-ignore
      let color = this.selected_mood1_object.color.toString(16);

      return 'background-color: #' + color + ';';
    },
    select_box2_background_color: function () {
      if (this.selected_mood2_object == null)
        return 'background-color: rgb(221, 221, 221);';
      // @ts-ignore
      let color = this.selected_mood2_object.color.toString(16);

      return 'background-color: #' + color + ';';
    },
    moodbox1: function () {
      // @ts-ignore
      return this.moods.filter((i:Mood) => i.id !== this.selected_mood2_object.id)
    },
    moodbox2: function () {
      // @ts-ignore
      return this.moods.filter((i:Mood) => i.id !== this.selected_mood1_object.id)
    },
  },
  data: function () {
    return {
      box_title: "",
      box_notes: "",
      selected_mood1_object: new Mood(),
      selected_mood2_object: new Mood(),
      send_button_enabled: false,

      divider_opened: false
    };
  },
  methods: {
    send: async function () {
      if (this.selected_mood1_object == null)
        return;

      let day = new Day();
      day.Date = this.date_to_add;
      day.Title = this.box_title;
      day.Notes = this.box_notes;
      day.mood1 = this.selected_mood1_object;

      if (this.selected_mood2_object != null) {
        day.mood2 = this.selected_mood2_object;
      }
      
      await this.$store.dispatch("addDay", {day: day, user_guid: this.$store.state.LocalUser.guid});
      this.$emit("close");
    },
    change_divider: function () {
      this.divider_opened = !this.divider_opened;
    }
  }
});
