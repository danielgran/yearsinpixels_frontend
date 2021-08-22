import IActions from "@/Frontend/Statemanagement/IActions";

import User from "@/Model/User";

export default class DefaultActions implements IActions {
  Actions: {};

  constructor() {
    this.Actions = {
      loginUser(state: any, bumm: { email: string; password: string }) {
        let mockUser = new User();
        mockUser.Username = "Ein krasser Benutzername";
        state.commit("SetUser", mockUser);
      },
    };
  }
}
