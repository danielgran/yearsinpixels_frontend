import Mood from "./Mood";

export default class Day {
  Date: Date;

  Title: String;
  Notes: String;

  mood1: Mood;
  mood2: Mood;

  constructor() {
    this.Date = new Date();
    this.Title = "";
    this.Notes = "";
    this.mood1 = new Mood();
    this.mood2 = new Mood();
  }
}
