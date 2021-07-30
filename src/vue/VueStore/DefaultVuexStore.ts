import { Store } from "vuex";

import { IVueStorePlugin } from "@/vue/VueStore/IVueStorePlugin";

import { DefaultState } from "./Store/DefaultState";
import { DefaultMutations } from "./Store/DefaultMutations";
import { DefaultStore } from "./Store/DefaultStore";


export class DefaultVuexStore implements IVueStorePlugin {

  plugin: any;

  // Should a new store instance
  store: Store<any> | undefined;

  constructor() {

    let state = new DefaultState();
    let mutations = new DefaultMutations(state);

    let store = new DefaultStore(
    {
      state: state,
      mutations: mutations.Mutations
    })
    this.plugin = store
    this.store = store

    console.log(store)
  }
}