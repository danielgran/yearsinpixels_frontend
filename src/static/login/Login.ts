import { defineComponent } from 'vue'

export default defineComponent({
  name: "Login",
  data: function() {
    return {
      emailbox: "",
      passwordbox: ""
    };
  },
  methods:
  {
    loginUser()
    {
      this.$store.dispatch('loginUser', {email: this.emailbox, password: this.passwordbox})
    }
  }

})