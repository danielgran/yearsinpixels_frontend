import {defineComponent} from "vue";

export default defineComponent({
  name: "Register",
  mounted() {
    if (this.$store.state.LoggedIn) {
      this.$router.push("/dashboard");
    }
  },
  data: function () {
    return {
      box_email: "",
      box_password1: "",
      box_password2: "",
      captcha_secret: "",
    };
  },
  methods: {
    async registerUser() {
      if (this.box_password1 == this.box_password2) {
        await this.$store.dispatch("registerUser", {
          email: this.box_email,
          password: this.box_password1,
          captcha: this.captcha_secret
        }).then(() => {
          this.$router.push("/login")
        });
      }
    },
  },
})
;
