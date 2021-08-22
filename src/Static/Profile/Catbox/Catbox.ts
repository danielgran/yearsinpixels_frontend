import { defineComponent } from "vue";

export default defineComponent({
  name: "Catbox",
  props: {
    categoryName: {
      type: String,
      default: "undefined",
    },
    preferences: {
      type: Array,
      default: function() {
        return [
          {
            name: "undefined",
            value: "undefined",
            displayEdit: true,
            CSSname: "background: red;",
            command: "should be a ICommand",
          },
        ];
      },
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
