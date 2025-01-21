import { IPostModel } from "../../../models/iPostModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IMyPostsController {
  handle(
    httpRequest: IHttpRequest<IPostModel[]>
  ): Promise<IHttpResponse<IPostModel[]>>;
}

export interface IMyPostsRepository {
  getMyPosts(id_user: string): Promise<IPostModel[]>;
}
