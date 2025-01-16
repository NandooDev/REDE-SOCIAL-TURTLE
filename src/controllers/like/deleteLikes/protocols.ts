import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IDeleteLikesRepository {
  deleteLike(id: string): Promise<string>;
}

export interface IDeleteLikesController {
  handle(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<string>>;
}
