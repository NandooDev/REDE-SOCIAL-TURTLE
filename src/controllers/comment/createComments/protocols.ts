import { ICommentModel } from "../../../models/iCommentModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface ICommentParams {
  content: string;
  id_post: string;
  id_user: string;
}

export interface ICreateCommentsRepository {
  createComment(params: ICommentParams): Promise<ICommentModel>;
}

export interface ICreateCommentsController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<ICommentModel>>;
}
