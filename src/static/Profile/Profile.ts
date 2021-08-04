import { defineComponent } from 'vue'

import Catbox from './Catbox/Catbox.vue';

export default defineComponent({
  name: "Profile",
  components: {
    Catbox
  },
  data: function() {
    return {
      box1: "",
      box2: "",
      box3: ""
    };
  },
  methods:
  {
    
  }

})