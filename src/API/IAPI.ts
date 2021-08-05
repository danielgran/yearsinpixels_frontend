import IRequest from "@/API/IRequest";
import IResponse from "./IResponse";

export default interface IAPI
{
  request(request: IRequest): IResponse
}