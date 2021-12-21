import Day from "@/Model/Day";
import User from "@/Model/User";

export default interface IState {
  LocalUser: User;
  days: Day[];
  LoggedIn: Boolean;
  show_add_day_in_dashboard: Boolean;
}
