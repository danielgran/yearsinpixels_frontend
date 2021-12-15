import { Store } from "vuex";
import IState from "@/Frontend/Statemanagement/IState";

declare module "@vue/runtime-core" {
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}
