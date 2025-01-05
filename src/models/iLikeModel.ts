import { IPostModel } from "./iPostModel";

export interface ILikeModel {
  id?: string;
  posts?: IPostModel[];
  id_user?: string;
}
