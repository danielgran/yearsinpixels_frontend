import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data: function() {
    return {
      box1: "",
      box2: "",
      box3: "",
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", { email: this.box1, password: this.box2 });
    },
  },
});
