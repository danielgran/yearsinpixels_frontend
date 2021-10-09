import IMutations from "@/Frontend/Statemanagement/IMutations";

import User from "@/Model/User";

export default class DefaultMutations implements IMutations {
  Mutations: {};

  constructor() {
    this.Mutations = {
      mockday(state: any) {
        state.name = "Whoop";
      },

      SetUser(state: any, payload: User) {
        state.localUser = payload;
      },
    };
  }
}
