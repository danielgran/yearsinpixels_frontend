import { Day } from "@/Model/Day";
import IState from "./IState";

export class DefaultState implements IState {
  name: String;
  days: Day[];

  constructor() {
    this.name = "Testing key"
    this.days = []
    this.days.push(new Day());

  }
}