import { IPostModel } from "../../../models/iPostModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IUpdatePostsPublishedRepository {
  updatePublished(id: string, published: boolean): Promise<IPostModel>;
}

export interface IUpdatePostsPublishedController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IPostModel>>;
}
