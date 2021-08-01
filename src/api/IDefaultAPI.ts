import { Day } from "@/Model/Day";

// This abstract class defines the standard api functions 
export default interface IDefaultAPI {
  Instance: any

  addDay(day: Day): void
  getAllDays(): Day[]
  updateDay(oldDay: Day, newDay: Day): void
  deleteDay(day: Day): void






}