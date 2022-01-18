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
      today: null,
      today_mood1_color: "grey",
      today_mood1_title: "",
      today_mood2_color: "grey",
      today_mood2_title: "",
      show_add_day: false,
      today_logged: false,
    };
  },
  computed: {
    ...mapState({
      LocalUser: function () {
        return this.$store.state.LocalUser;
      },
      todays_mood_title() {
        if (this.today == null)
          return "";
        let today: Day = this.get_today()!;
        return today.mood1.title;
      },
    }),
    date_today: function () {
      return new Date()
    },
  },
  methods: {
    open_add_day: function () {
      this.show_add_day = true;
    },
    handle_addday_update: async function () {
      // @ts-ignore
      this.today = this.get_today();
      this.show_add_day = false;


      if (this.today == null)
        return;
      this.today_logged = true;

      // @ts-ignore
      this.today_mood1_color = `color: #${this.today.mood1.color.toString(16)};`;
      // @ts-ignore
      this.today_mood1_title = this.today.mood1.title;

      // @ts-ignore
      this.today_mood2_color = `color: #${this.today.mood2.color.toString(16)};`;
      // @ts-ignore
      this.today_mood2_title = this.today.mood2.title;

      await this.$store.dispatch("refreshDays");
    },
    get_today: function () {
      let days_from_store = this.$store.state.days;
      let latest_day;
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
    this.today = this.get_today();
    if (this.today == null)
      return;
    this.today_logged = true;
    console.log(this.today);
    // @ts-ignore
    this.today_mood1_color = `color: #${this.today.mood1.color.toString(16)};`;
    // @ts-ignore
    this.today_mood1_title = this.today.mood1.title;

    // @ts-ignore
    this.today_mood2_color = `color: #${this.today.mood2.color.toString(16)};`;
    // @ts-ignore
    this.today_mood2_title = this.today.mood2.title;


  },
});