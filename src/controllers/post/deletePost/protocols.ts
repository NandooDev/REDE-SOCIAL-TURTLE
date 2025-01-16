import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IDeletePostsRepository {
    deletePost(id: string): Promise<string>;
  }
  
  export interface IDeletePostsController {
    handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<string>>;
  }