import { defineComponent } from 'vue'

export default defineComponent({
  name: "Header",
  data: function() {
    return {
      shouldRender: true,
      title: "yearsinpixels.com"
    };
  }
})