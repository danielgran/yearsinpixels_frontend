import {IVueStore} from "@/vue/IVueStore";
import {Store} from "vuex";
import Vuex from "vuex";

export class VuexStore implements IVueStore {

  plugin: any

  // Should a new store instance
  store: Store<any>;

  constructor(vueinstance: any) {
    this.plugin = Vuex;
    vueinstance.use(this.plugin)

    this.store = new Vuex.Store({
      state: {
        mainViewHeight: 0,
        name: "Daniel Gran"
      },
      getters: {
        getName() {
          return "Daniel Gran"
        }
      },
      mutations: {
        increment(state: any) {
          console.log(state)
        },
        setMainViewHeight(state: any, value: any) {
          state.mainViewHeight = value
        }
      }
    })

  }
}