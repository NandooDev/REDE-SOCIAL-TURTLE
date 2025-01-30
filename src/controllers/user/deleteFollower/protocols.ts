import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IDeleteFollowerController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IUserModel>>;
}

export interface IDeleteFollowerRepository {
  deleteFollower(username: string): Promise<IUserModel>;
}
