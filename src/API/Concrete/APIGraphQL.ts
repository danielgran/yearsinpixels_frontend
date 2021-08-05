import IAPI from "@/API/IAPI";
import IRequest from "@/API/IRequest";
import IResponse from "@/API/IResponse";

export default class APIGraphQL implements IAPI {
  request(request: IRequest): IResponse {
    throw new Error("Method not implemented.");
  }
}
