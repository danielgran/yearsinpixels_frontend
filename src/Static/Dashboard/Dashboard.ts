import { defineComponent } from "vue";

export default defineComponent({
  name: "Dashboard",
  data: function() {
    return {
      name_first: this.$store.state.LocalUser.name_first,
      date_day: this.$store.state.date_day,
      date_month: this.$store.state.date_month,
      date_year: this.$store.state.date_year,
    };
  },
  async beforeCreate() {
    if (!this.$store.state.LoggedIn) {
      this.$router.push("/login")
    }
    await this.$store.dispatch("refreshToday");
    await this.$store.dispatch("refreshUser");

  },
});