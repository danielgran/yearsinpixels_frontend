import Day from "@/Model/Day";
import User from "@/Model/User";

export default interface IState {
  Name: String;
  LocalUser: User;
  Days: Day[];
  LoggedIn: Boolean;
  date_day: Number,
  date_month: Number,
  date_year: Number,
}
