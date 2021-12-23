import Day from "@/Model/Day";
import User from "@/Model/User";
import Mood from "@/Model/Mood";

export default interface IState {
  LocalUser: User;
  days: Day[];
  LoggedIn: Boolean;
  moods: Mood[];
}
