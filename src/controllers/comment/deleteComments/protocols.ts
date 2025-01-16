import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IDeleteCommentsRepository {
    deleteComment(id: string): Promise<string>;
  }
  
  export interface IDeleteCommentsController {
    handle(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<string>>;
  }