import { IFrontend } from "@/struct/IFrontend";
import { DefaultVueFrontend } from "@/vue/VueFrontend/DefaultVueFrontend";

let frontend: IFrontend = new DefaultVueFrontend()
frontend.InitInstance()