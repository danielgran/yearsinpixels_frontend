import Mood from "./Mood";


export default class Day {

  date: Date

  title: String
  notes: String

  mood: Mood

  constructor() {
  
    this.date = new Date();
    this.title = "";
    this.notes = "";
    this.mood = new Mood();


  }



} 