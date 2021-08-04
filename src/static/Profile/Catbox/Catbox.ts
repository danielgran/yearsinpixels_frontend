import { defineComponent } from 'vue'

import IPreference from '@/Model/Preference';

export default defineComponent({
  name: "Catbox",
  props: {
    categoryname: {
      type: String,
      required: true
    },
    preferences: {
      type: Array
    }
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