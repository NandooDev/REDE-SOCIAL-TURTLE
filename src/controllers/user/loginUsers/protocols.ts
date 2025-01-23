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

export interface IPayloadLoginReturn {
  login: boolean;
  id?: string;
  username?: string;
  role?: string;
}

export interface IKeysJwt {
  acessToken: string;
  refreshToken: string;
}

export interface ILoginUsersController {
  handle(
    httpRequest: IHttpRequest<IUserParamsLogin>
  ): Promise<IHttpResponse<IKeysJwt>>;
}

export interface ILoginUsersRepository {
  loginUsers(loginParams: IUserParamsLogin): Promise<IPayloadLoginReturn>;
}
