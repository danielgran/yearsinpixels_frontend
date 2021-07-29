import { createStore } from "vuex";

import DefaultMutations from "./DefaultMutations";
import { DefaultState } from "./DefaultState";


export default createStore(
  {
    modules: {
    },
    state: DefaultState,
    mutations: DefaultMutations
  }
)