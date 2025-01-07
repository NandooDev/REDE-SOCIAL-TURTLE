import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IDeleteUsersRepository {
  deleteUsers(id: string): Promise<string>;
}

export interface IDeleteUsersController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<string>>;
}
