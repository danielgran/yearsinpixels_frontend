import {defineComponent} from "vue";
import AddDay from "@/Static/BottomSheets/AddDay/AddDay.vue";
import {mapState} from "vuex";

export default defineComponent({
  name: "Dashboard",
  components: {
    AddDay
  },
  data: function () {
    return {
    };
  },
  computed: {
    ...mapState([
      'show_add_day_in_dashboard',
      'LocalUser',
      'today',
      'today_logged',
      'date_year',
      'date_month',
      'date_day'
    ]),
    todays_mood_color: function () {
      try {
        return "color: #" + this.$store.state.today.Mood.color.toString(16) + ";";
      } catch (e) {
        return "color: none;"
      }
    }
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