import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IForgotPasswordParams {
  email: string;
  currentPassword: string;
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
    currentPassword: string,
    newPassword: string
  ): Promise<string>;
}
