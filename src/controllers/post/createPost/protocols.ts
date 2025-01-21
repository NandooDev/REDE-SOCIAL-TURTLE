import { IPostModel } from "../../../models/iPostModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IPostParams {
  title: string;
  content: string;
  attachment?: string;
  published: boolean;
  id_user: string;
}

export interface ICreatePostRepository {
  createPost(params: IPostParams): Promise<IPostModel>;
}

export interface ICreatePostController {
  handle(
    httpRequest: IHttpRequest<IPostParams>
  ): Promise<IHttpResponse<IPostModel>>;
}
