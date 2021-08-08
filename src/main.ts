import IFrontend from "@/struct/IFrontend";
import VueFrontend from "@/vue/VueFrontend";

import YearsInPixels from "@/vue/YearsInPixels.vue";

let frontend: IFrontend = new VueFrontend(YearsInPixels);
frontend.StartFrontend();
