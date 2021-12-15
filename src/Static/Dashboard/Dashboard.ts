import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  data: function() {
    return {
      username: this.$store.state.LocalUser.Username
    };
  },
  beforeCreate() {
    if (!this.$store.state.LoggedIn) {
      this.$router.push("/login")
    }
  },
});