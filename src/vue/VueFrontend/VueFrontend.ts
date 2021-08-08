import IFrontend from "@/struct/IFrontend";
import IVueInstance from "@/vue/IVueInstance";

import VueInstance from "@/vue/VueInstance/VueInstance";
import { Component } from "vue";

export default class VueFrontend implements IFrontend {
  Instance: IVueInstance;

  RootComponent: Component;

  constructor(rootComp: Component) {
    this.RootComponent = rootComp;
    this.Instance = new VueInstance(this.RootComponent);
  }

  StartFrontend(): void {
    this.Instance.StartInstance();
  }

  StopFrontend(): void {
    this.Instance.StopInstance();
  }
}
