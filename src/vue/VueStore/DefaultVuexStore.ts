import { Store } from "vuex";

import { IVueStorePlugin } from "@/vue/VueStore/IVueStorePlugin";

import DefaultStore, { DefaultStoreToBe } from "./Store/DefaultStore";
import { DefaultStateToBe } from "./Store/DefaultState";
import { DefaultMutationsToBe } from "./Store/DefaultMutations";


export class DefaultVuexStore implements IVueStorePlugin {

  plugin: any;

  // Should a new store instance
  store: Store<any> | undefined;

  constructor() {

    let state = new DefaultStateToBe();
    let mutations = new DefaultMutationsToBe(state);

    let store = new DefaultStoreToBe(
    {
      state: state,
      mutations: mutations.Mutations
    })
    this.plugin = store
    this.store = store

    console.log(store)
  }
}