import Day from "@/Model/Day";
import User from "@/Model/User";
import Mood from "@/Model/Mood";
import IState from "@/Frontend/Statemanagement/IState";

export default class DefaultState implements IState {
  days: Day[];
  LocalUser: User;
  LoggedIn: Boolean;
  SessionTokenAsJWT: String;
  moods: Mood[];

  constructor() {
    this.days = [];
    this.LocalUser = new User();
    this.LoggedIn = false;
    this.SessionTokenAsJWT = "";
    this.moods = [];

  }

}
