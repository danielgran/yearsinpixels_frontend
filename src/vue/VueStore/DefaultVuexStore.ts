import { IVueStore } from "@/vue/VueStore/IVueStore";
import { Store } from "vuex";

import { createStore } from "vuex";

export class DefaultVuexStore implements IVueStore {

  plugin: any;

  // Should a new store instance
  store: Store<any> | undefined;

  constructor() {
    let store = createStore({
      state () {
        return {
          count: 1
        }
      }
    })
    this.plugin = store


  }
/*
  Init() {
    this.store = new Vuex.Store({
      state: {
        mainViewHeight: 0,
        name: "Daniel Gran"
      },
      getters: {
        getName() {
          return "Daniel Gran";
        }
      },
      mutations: {
        increment(state: any) {
          console.log(state);
        },
        setMainViewHeight(state: any, value: any) {
          state.mainViewHeight = value;
        }
      }
    });
  }
  */

}