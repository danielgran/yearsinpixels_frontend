import Day from "@/Model/Day";
import User from "@/Model/User";

export default interface IState {
  LocalUser: User;
  days: Day[];
  today: Day;
  today_logged: boolean;
  LoggedIn: Boolean;
  date_day: Number;
  date_month: Number;
  date_year: Number;
  show_add_day_in_dashboard: Boolean;
}
