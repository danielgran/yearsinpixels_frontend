import Day from "@/Model/Day";
import User from "@/Model/User";

export default interface IState {
  LocalUser: User;
  days: Day[];
  LoggedIn: Boolean;
}
