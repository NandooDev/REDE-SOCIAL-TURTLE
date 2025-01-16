import { ICommentModel } from "./iCommentModel";

export interface IPostModel {
  id?: string;
  title: string;
  content: string;
  attachment?: string;
  published: boolean;
  id_user: string;
  created_at?: Date;
  coments?: ICommentModel[];
}
