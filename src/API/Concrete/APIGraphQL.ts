import IAPI from "@/API/IAPI";
import IRequest from "@/API/Request/IRequest";
import IResponse from "@/API/IResponse";

export default class APIGraphQL implements IAPI {
  Request(request: IRequest): IResponse {
    throw new Error("Method not implemented.");
  }
}
