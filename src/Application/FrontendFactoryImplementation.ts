import YearsInPixelsFrontend from "@/vue/YearsInPixelsFrontend";
import Frontend from "./Frontend";
import FrontendFactory from "./FrontendFactory";

export default class FrontendFactoryImplementation implements FrontendFactory {

  MakeFrontend(): Frontend {
    let frontend = new YearsInPixelsFrontend();
    return frontend;
  }
}