// This is the model of a day object

import { Mood } from './Mood'

export interface IDay {

  date: Date

  title: String
  notes: String

  mood: Mood
} 