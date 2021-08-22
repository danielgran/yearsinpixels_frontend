import IActions from "@/Frontend/Statemanagement/IActions";

import User from "@/Model/User";

export default class DefaultActions implements IActions {
  Actions: {};

  constructor() {
    this.Actions = {
      loginUser(state: any, bumm: { email: string; password: string }) {
        // some api calls to finally receive the user from the backend

        let tempUser = new User();
        tempUser.Username = "Ein krasser Benutzername"; // TODO

        state.commit("SetUser", tempUser);
      },
    };
  }
}
