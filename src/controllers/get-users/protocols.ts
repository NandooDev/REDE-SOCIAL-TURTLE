import { IUserModel } from "../../models/iUserModel";
import { IHttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<IHttpResponse<IUserModel[]>>;
}

export interface IGetUsersRepository {
  getUsers(): Promise<IUserModel[]>;
}