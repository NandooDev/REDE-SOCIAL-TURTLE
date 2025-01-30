import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IAddFollowerController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IUserModel>>;
}

export interface IAddFollowerRepository {
  addFollower(username: string): Promise<IUserModel>;
}
