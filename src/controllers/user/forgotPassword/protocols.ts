import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IForgotPasswordParams {
  email: string;
  newPassword: string;
}

export interface IForgotPasswordController {
  handle(
    httpRequest: IHttpRequest<IForgotPasswordParams>
  ): Promise<IHttpResponse<string>>;
}

export interface IForgotPasswordRepository {
  forgotPassword(
    email: string,
    newPassword: string
  ): Promise<string>;
}
