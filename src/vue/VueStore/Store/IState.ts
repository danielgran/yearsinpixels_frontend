import { Day } from "@/Model/Day";
import { User } from "@/Model/User";

export default interface IState {
  name: String;
  localUser: User;
  days: Day[];

}