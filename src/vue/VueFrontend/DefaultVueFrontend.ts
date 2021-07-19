import { IFrontend } from "@/struct/IFrontend";
import { DefaultVueInstance } from "@/vue/VueInstance/DefaultVueInstance";

export class DefaultVueFrontend implements IFrontend{
  Instance: any;


  constructor() {
    this.Instance = new DefaultVueInstance()
  }


  InitInstance(): any {


  }



}