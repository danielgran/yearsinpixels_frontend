import {defineComponent} from "vue";

export default defineComponent({
  name: "Login",
  data: function () {
    return {
      box_email: "daniel",
      box_password: "daniel",
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", {email: this.box_email, password: this.box_password});
      console.log(this.$store.state.LoggedIn)
    },
  },
});
