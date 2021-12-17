import {defineComponent} from "vue";

export default defineComponent({
  name: "Logout",
  async mounted() {
    this.$store.dispatch("logoutUser");
    let sleep = new Promise(resolve => setTimeout(resolve, 2000))
    await sleep.then(() => {
      this.$router.push("/")
    })
  },
  data: function () {
    return {
    };
  }
});
