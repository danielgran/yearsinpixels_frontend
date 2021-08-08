import Mood from "./Mood";

export default class Day {
  Date: Date;

  Title: String;
  Notes: String;

  Mood: Mood;

  constructor() {
    this.Date = new Date();
    this.Title = "";
    this.Notes = "";
    this.Mood = new Mood();
  }
}
