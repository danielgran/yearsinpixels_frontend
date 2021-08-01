import { defineComponent } from 'vue'

export default defineComponent({
  name: "Dashboard",
  data: function() {
    return {
      username: this.$store.state.localUser.email
    };
  }
})