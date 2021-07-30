import { createStore, Store, StoreOptions } from "vuex";

import DefaultMutations from "./DefaultMutations";
import { DefaultState, DefaultStateToBe } from "./DefaultState";
import IState from "./IState";


export default createStore(
  {
    modules: {
    },
    state: new DefaultStateToBe(),
    mutations: DefaultMutations
  }
)

export class DefaultStoreToBe extends Store<any> {

  constructor(options: StoreOptions<any>) {
    super(options)
  }

}