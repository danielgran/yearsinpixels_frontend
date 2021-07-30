import { Day } from "@/Model/Day";
import IState from "./IState";

export const DefaultState:IState = {
  name: "Wheetelwhee",
  days: [new Day()],
}


export class DefaultStateToBe implements IState {
  name: String;
  days: Day[];

  constructor() {
    this.name = "Debug Testing"
    this.days = []
    this.days.push(new Day());

  }
}