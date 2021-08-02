import IFrontend from "@/struct/IFrontend";
import IVueInstance from "@/vue/IVueInstance";

import DefaultVueInstance from "@/vue/VueInstance/DefaultVueInstance";


export default class DefaultVueFrontend implements IFrontend {
  Instance: IVueInstance;

  constructor() {
    this.Instance = new DefaultVueInstance();
  }


  StartFrontend(): void {
    this.Instance.StartInstance();
  }
  
  StopFrontend(): void {
    this.Instance.StopInstance();
  }
  
}