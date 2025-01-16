import { ILikeModel } from "../../../models/iLikeModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";

export interface ILikeParams {
  id_post: string;
  id_user: string;
}

export interface ICreateLikesRepository {
  createLike(params: ILikeParams): Promise<ILikeModel[]>;
}

export interface ICreateLikesController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<ILikeModel[]>>;
}
