import IRequest from "@/API/Request/IRequest";
import IResponse from "./IResponse";

export default interface IAPI
{
  request(request: IRequest): IResponse
}