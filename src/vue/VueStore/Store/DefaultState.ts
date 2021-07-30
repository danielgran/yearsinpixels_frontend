import { Day } from "@/Model/Day";
import IState from "./IState";

export class DefaultState implements IState {
  name: String;
  days: Day[];

  constructor() {
    this.name = "Debug Testing"
    this.days = []
    this.days.push(new Day());

  }
}