import { IFrontend } from "@/struct/IFrontend";
import { DefaultVueInstance } from "@/vue/VueInstance/DefaultVueInstance";

export class DefaultVueFrontend implements IFrontend {
  Instance: DefaultVueInstance;

  constructor() {
    this.Instance = new DefaultVueInstance();
  }


  InitInstance(): any {

  }


}