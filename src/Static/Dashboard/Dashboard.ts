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

const sameDate = (someDate: Date, someDate2: Date) => {
  return someDate.getDate() == someDate2.getDate() &&
    someDate.getMonth() == someDate2.getMonth() &&
    someDate.getFullYear() == someDate2.getFullYear()
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
      not_logged_days: null
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
  beforeCreate: async function () {
    if (!this.$store.state.LoggedIn) {
      this.$router.push("/login")
    }

    await this.$store.dispatch("refreshUser");
    await this.$store.dispatch("refreshMoods");
    await this.$store.dispatch("refreshDays");


    // @ts-ignore
    this.today = this.get_today();
    if (this.today != null) {
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
    }

    let possible_not_logged_dates: Date[] = []

    let date: Date = new Date((new Date()).getFullYear().toString() + "-01-01")
    while (date <= new Date()) {
      possible_not_logged_dates.push(date)
      date = new Date(date.getTime() + (1000 * 60 * 60 * 24));
    }
    //check
    let logged_dates: Date[] = []
    for (const loggedDatesKey in this.$store.state.days) {
      // @ts-ignore
      let day = this.$store.state.days[loggedDatesKey]
      logged_dates.push(day.Date)
    }
    //check

    let not_logged_dates_until_now: Date[] = [];

    for (const notLoggedDays in possible_not_logged_dates) {
      let date = possible_not_logged_dates[notLoggedDays]

      // get the possibly logged day
      const found_date = logged_dates.find(
        found_date => sameDate(date, found_date),
      );

      // @ts-ignore
      if (!found_date)
        // @ts-ignore
        not_logged_dates_until_now.push(date)
    }
    // @ts-ignore
    this.not_logged_days = not_logged_dates_until_now;


  }
})
