
import Day from "@/Model/Day";
import User from "@/Model/User";
import IState from "@/vue/Vuex/IState";

export default class DefaultState implements IState {
  name: String;
  days: Day[];
  localUser: User;

  constructor() {
    this.name = "Testing key"
    this.days = []
    this.days.push(new Day());

    this.localUser = new User();
  }
}