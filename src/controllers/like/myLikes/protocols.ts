import { ILikeModel } from "../../../models/iLikeModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface IMyLikesController {
  handle(
    httpRequest: IHttpRequest<ILikeModel[]>
  ): Promise<IHttpResponse<ILikeModel[]>>;
}

export interface IMyLikesRepository {
  getMyLikes(id_user: string): Promise<ILikeModel[]>;
}
