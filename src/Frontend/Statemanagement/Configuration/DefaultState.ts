import Day from "@/Model/Day";
import User from "@/Model/User";
import Mood from "@/Model/Mood";
import IState from "@/Frontend/Statemanagement/IState";

export default class DefaultState implements IState {
  days: Day[];
  LocalUser: User;
  LoggedIn: Boolean;
  SessionTokenAsJWT: String;
  date_day: Number;
  date_month: Number;
  date_year: Number;
  show_add_day_in_dashboard: boolean;
  moods: Mood[];
  today: Day;
  today_logged: boolean;

  constructor() {
    this.days = [];
    this.today = new Day();
    this.today_logged = false;
    this.LocalUser = new User();
    this.LoggedIn = false;
    this.SessionTokenAsJWT = "";
    this.date_day = 0;
    this.date_month = 0;
    this.date_year = 0;
    this.show_add_day_in_dashboard = false;
    this.moods = [];

  }

}
