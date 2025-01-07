import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IUpdateUsersParams {
  name?: string;
  username?: string;
  password?: string;
  profile_phote?: string;
  position?: string;
  company_code?: string;
}

export interface IUpdateUsersController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IUserModel>>;
}

export interface IUpdateUsersRepository {
  updateUsers(id: string, params: IUpdateUsersParams): Promise<IUserModel>;
}
