import { IFrontend } from "@/struct/IFrontend";
import { DefaultVueInstance } from "@/vue/VueInstance/DefaultVueInstance";
import { IVueInstance } from "../IVueInstance";

export class DefaultVueFrontend implements IFrontend {
  Instance: IVueInstance ;

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