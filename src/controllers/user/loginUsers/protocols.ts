import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IVerifyPassword {
  verify(
    password: string,
    passwordCryptography: string
  ): Promise<boolean | string>;
}

export interface IUserParamsLogin {
  email: string;
  password: string;
}

export interface ILoginUsersController {
  handle(
    httpRequest: IHttpRequest<IUserParamsLogin>
  ): Promise<IHttpResponse<boolean>>;
}

export interface ILoginUsersRepository {
  loginUsers(loginParams: IUserParamsLogin): Promise<boolean>;
}
