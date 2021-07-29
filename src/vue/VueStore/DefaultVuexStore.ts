import { Store } from "vuex";

import { IVueStorePlugin } from "@/vue/VueStore/IVueStorePlugin";

import DefaultStore from "./Store/DefaultStore";


export class DefaultVuexStore implements IVueStorePlugin {

  plugin: any;

  // Should a new store instance
  store: Store<any> | undefined;

  constructor() {
    let store = DefaultStore
    this.plugin = store
  }
}