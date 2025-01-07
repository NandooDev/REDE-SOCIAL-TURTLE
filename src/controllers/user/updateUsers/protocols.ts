import { IUserModel } from "../../../models/iUserModel";

export interface IUpdateUsersController {
  handle(): Promise<IUserModel>;
}

export interface IUpdateUsersParams {
  name?: string;
  username?: string;
  password?: string;
  profile_phote?: string;
  position?: string;
  company_code?: string;
}

export interface IUpdateUsersRepository {
  updateUsers(id: string, params: IUpdateUsersParams): Promise<IUserModel>;
}
