import Day from "@/Model/Day";
import User from "@/Model/User";
import IState from "@/vue/Statemanagement/IState";

export default class DefaultState implements IState {
  Name: String;
  Days: Day[];
  LocalUser: User;

  constructor() {
    this.Name = "Testing key";
    this.Days = [];
    this.Days.push(new Day());
    this.LocalUser = new User();
  }
}
