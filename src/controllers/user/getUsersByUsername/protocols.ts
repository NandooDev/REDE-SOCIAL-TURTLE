import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IGetUsersByUsernameController {
  handle(
    httpRequest: IHttpRequest<IUserModel>
  ): Promise<IHttpResponse<IUserModel>>;
}

export interface IGetUsersByUsernameRepository {
  getUsersByUsername(username: string): Promise<IUserModel>;
}
