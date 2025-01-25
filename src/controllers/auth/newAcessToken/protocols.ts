import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IAuthController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<string>>;
}

export interface INewAcessToken {
  newAcessToken(refreshToken: string): Promise<string>;
}
