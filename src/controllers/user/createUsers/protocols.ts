import { IUserModel } from "../../../models/iUserModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface ICreateUsersController {
  handle(
    httpRequest: IHttpRequest<ICreateUsersParams>
  ): Promise<IHttpResponse<IUserModel>>;
}

export interface ICreateUsersParams {
  username: string;
  name: string;
  email: string;
  password: string;
  profile_photo?: string;
}

export interface ICreateUsersRepository {
  createUsers(params: ICreateUsersParams): Promise<IUserModel>;
}

export interface ICryptographyPassword {
  execute(password: string): Promise<string>;
}