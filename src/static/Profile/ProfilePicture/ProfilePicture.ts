import { defineComponent } from "vue";

export default defineComponent({
  name: "Catbox",
  props: {
    linkPicture: {
      type: String,
      default: "https://www.grandaniel.com/profile.png"
    },
  },
  data: function() {
    return {
      box1: "",
      box2: "",
      box3: "",
    };
  },
  methods: {},
});
