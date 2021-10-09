import { defineComponent } from "vue";

import Catbox from "./Catbox/Catbox.vue";
import ProfilePicture from "./ProfilePicture/ProfilePicture.vue";

export default defineComponent({
  name: "Profile",
  components: {
    Catbox,
    ProfilePicture,
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
