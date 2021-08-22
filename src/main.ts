import Frontend from "./Application/Frontend";
import FrontendFactory from "./Application/FrontendFactory";
import FrontendFactoryImplementation from "./Application/FrontendFactoryImplementation";

let factory: FrontendFactory= new FrontendFactoryImplementation();
let frontend: Frontend = factory.MakeFrontend();
frontend.StartFrontend();
