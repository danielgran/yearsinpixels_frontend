import {defineComponent} from "vue";
import AddDay from "@/Static/BottomSheets/AddDay/AddDay.vue";
import {mapState} from "vuex";
import Day from "@/Model/Day";


const isToday = (someDate: Date) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}

export default defineComponent({
  name: "Dashboard",
  components: {
    AddDay
  },
  data: function () {
    return {
      today: null
    };
  },
  computed: {
    ...mapState([
      'show_add_day_in_dashboard',
      'LocalUser',
    ]),
    date_today: function() {
      return new Date()
    },
    today_logged: function() {
      if (this.today == null)
        return false;
      else
        return true;
    },
    todays_mood_title: function () {
      if (this.today == null)
        return "";
      let today: Day = this.get_today()!;
      return today.Mood.title;
    },
    todays_mood_color: function () {
      if (this.today == null)
        return "color: none;";
      let today: Day = this.get_today()!;
      return "color: #" + today.Mood.color.toString(16) + ";";
    }
  },
  methods: {
    open_add_day: function () {
      this.$store.commit("SetShowDialogInDashboard", true);
    },
    get_today: function () {
      console.log(this.$store.state);
      let days_from_store = this.$store.state.days;
      let latest_day;
      console.log(days_from_store);
      for (const day of days_from_store)
        if (isToday(day.Date))
          latest_day = day;
        else
          latest_day = null;

      return latest_day;
    },
  },
  async beforeCreate() {
    if (!this.$store.state.LoggedIn) {
      this.$router.push("/login")
    }
    await this.$store.dispatch("refreshUser");
    await this.$store.dispatch("refreshMoods");
    await this.$store.dispatch("refreshDays");

    // @ts-ignore
    this.today = this.get_today()!;

  },
});