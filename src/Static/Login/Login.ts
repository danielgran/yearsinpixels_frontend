import {defineComponent} from "vue";

import {VueRecaptcha} from "vue-recaptcha";

export default defineComponent({
  name: "Login",
  components: {
    VueRecaptcha
  },
  mounted() {
    if (this.$store.state.LoggedIn) {
      this.$router.push("/dashboard");
    }
  },
  data: function () {
    return {
      box_email: "daniel",
      box_password: "daniel",
      captcha_secret: "",
      last_clicked: 0
    };
  },
  methods: {
    async loginUser() {
      await this.$store.dispatch("loginUser", {email: this.box_email, password: this.box_password, captcha: this.captcha_secret});
      if (this.$store.state.LoggedIn)
        this.$router.push("/dashboard");
    },
    captcha_callback(result: any) {
      console.log(result)
      this.captcha_secret = result
    },
    execute_captcha() {
      //@ts-ignore
      this.$refs.recaptcha.execute();
    }
  },
})
;
