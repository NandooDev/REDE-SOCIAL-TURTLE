import { ICommentModel } from "../../../models/iCommentModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IMyCommentsController {
  handle(
    httpRequest: IHttpRequest<ICommentModel[]>
  ): Promise<IHttpResponse<ICommentModel[]>>;
}

export interface IMyCommentsRepository {
  getMyComments(id_user: string): Promise<ICommentModel[]>;
}
