import IMutations from "@/Frontend/Statemanagement/IMutations";

import User from "@/Model/User";
import Mood from "@/Model/Mood";
import Day from "@/Model/Day";

export default class DefaultMutations implements IMutations {
  Mutations: {};

  constructor() {
    this.Mutations = {
      mockday(state: any) {
        state.name = "Whoop";
      },
      SetToken(state: any, token: string) {
        state.SessionTokenAsJWT = token;

      },
      SetLoggedIn(state: any, loggedIn:boolean) {
        state.LoggedIn = loggedIn;
      },
      SetGlobalUserGuid(state: any, guid: string) {
        state.LocalUser.guid = guid;
      },
      SetUser(state: any, user: User) {
        let old_guid = state.LocalUser.guid;
        user.guid = old_guid;
        state.LocalUser = user;
      },
      LogoutUser(state: any) {
        state.SessionTokenAsJWT = "";
        state.LoggedIn = false;
        state.LocalUser = new User();
      },
      SetGlobalDate(state: any, date: Date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        state.date_day = day;
        state.date_month = month;
        state.date_year = year;
      },
      SetShowDialogInDashboard(state: any, show: Boolean) {
        state.show_add_day_in_dashboard = show;
      },
      SetMoods(state: any, moods: Mood[]) {
        state.moods = moods;
      },
      SetDays(state: any, days: Day[]) {
        state.days = days;
      }
    };
  }
}
