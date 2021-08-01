import { createStore, Store } from "vuex";

import { IVueStorePlugin } from "@/vue/VueStore/IVueStorePlugin";

import { DefaultState } from "./Store/DefaultState";
import { DefaultMutations } from "./Store/DefaultMutations";

import DefaultActions from "./Store/DefaultActions";

import createPersistedState from "vuex-persistedstate"


export class DefaultVuexStore implements IVueStorePlugin {

  plugin: any;

  // Should a new store instance
  store: Store<any> | undefined;

  constructor() {

    let state = new DefaultState();
    let mutations = new DefaultMutations(state);
    let actions = new DefaultActions(state);

    let store = createStore({
      state: state,
      mutations: mutations.Mutations,
      actions: actions.Actions,
      plugins: [
        createPersistedState(),
      ]
    })

    this.plugin = store
    this.store = store
  }
}