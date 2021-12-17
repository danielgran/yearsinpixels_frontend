import {defineComponent} from "vue";

export default defineComponent({
  name: "Login",
  beforeCreate() {
    if (this.$store.state.LoggedIn) {

      this.$router.push("/dashboard");
    }
  },
  data: function () {
    return {
      box_email: "daniel",
      box_password: "daniel",
    };
  },
  methods: {
    async loginUser() {
      await this.$store.dispatch("loginUser", {email: this.box_email, password: this.box_password});
      if (this.$store.state.LoggedIn) {
        this.$router.push("/dashboard");
      }
    },
  },
});
