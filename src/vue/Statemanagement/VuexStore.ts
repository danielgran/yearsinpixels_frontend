import { createStore, Store } from "vuex";
import createPersistedState from "vuex-persistedstate"


import IState from "./IState";
import IVueStorePlugin from "@/vue/Statemanagement/IVueStorePlugin";
import IMutations from "./IMutations";
import IActions from "./IActions";


export default class VuexStore implements IVueStorePlugin {

  plugin: any;
  store: Store<any> | undefined;

  constructor(state: IState, mutations: IMutations, actions: IActions) {

    let store = createStore({
      state: state,
      mutations: mutations.Mutations,
      actions: actions.Actions,
      plugins: [
        createPersistedState(),
      ]
    })

    this.plugin = store
  }
}