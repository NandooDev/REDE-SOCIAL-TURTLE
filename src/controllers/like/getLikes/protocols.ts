import { ILikeModel } from "../../../models/iLikeModel";
import { IHttpResponse } from "../../protocols";

export interface IGetLikesRepository {
  getLikes(): Promise<ILikeModel[]>;
}

export interface IGetLikesController {
  handle(): Promise<IHttpResponse<ILikeModel[]>>;
}
