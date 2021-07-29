// This is the model of a day object

import { Mood } from './Mood'

export class Day {

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