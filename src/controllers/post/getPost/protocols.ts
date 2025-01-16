import { IPostModel } from "../../../models/iPostModel";
import { IHttpResponse } from "../../protocols";

export interface IGetPostsRepository {
  getPosts(): Promise<IPostModel[]>;
}

export interface IGetPostsController {
  handle(): Promise<IHttpResponse<IPostModel[]>>;
}
