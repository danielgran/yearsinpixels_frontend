import { defineComponent } from "vue";
import AddDay from "@/Static/BottomSheets/AddDay/AddDay.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    AddDay
  },
  data: function() {
    return {
      name_first: this.$store.state.LocalUser.name_first,
      date_day: this.$store.state.date_day,
      date_month: this.$store.state.date_month,
      date_year: this.$store.state.date_year,
    };
  },
  methods: {
    open_add_day: function () {
      this.$store.commit("SetShowDialogInDashboard", true);
    }
  },
  async beforeCreate() {
    if (!this.$store.state.LoggedIn) {
      this.$router.push("/login")
    }
    await this.$store.dispatch("refreshToday");
    await this.$store.dispatch("refreshUser");
    await this.$store.dispatch("refreshMoods");
    await this.$store.dispatch("refreshDays");

  },
});