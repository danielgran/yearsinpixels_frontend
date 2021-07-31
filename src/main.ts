import { IFrontend } from "@/struct/IFrontend";
import { DefaultVueFrontend } from "@/vue/VueFrontend/DefaultVueFrontend";

let frontend: IFrontend = new DefaultVueFrontend()
frontend.StartFrontend();

console.log("Stopping fronted");
frontend.StopFrontend();

console.log("Starting Frontend again");
frontend.StartFrontend();

console.log(frontend)