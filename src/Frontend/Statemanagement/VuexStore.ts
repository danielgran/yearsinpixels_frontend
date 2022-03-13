import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";

import IState from "./IState";
import IVueStorePlugin from "@/Frontend/Statemanagement/IVueStorePlugin";
import IMutations from "./IMutations";
import IActions from "./IActions";

export default class VuexStore implements IVueStorePlugin {
  Plugin: any;
  Store: any;

  constructor(state: IState, mutations: IMutations, actions: IActions) {
    let store = createStore({
      state: state,
      strict: false,
      mutations: mutations.Mutations,
      actions: actions.Actions,
      plugins: [createPersistedState()]
    });
    this.Plugin = store;
  }
}
