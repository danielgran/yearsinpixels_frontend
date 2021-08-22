import Day from "@/Model/Day";
import User from "@/Model/User";

export default interface IState {
  Name: String;
  LocalUser: User;
  Days: Day[];
}
