import { ICommentModel } from "./iCommentModel";
import { IPostModel } from "./iPostModel";

export interface IUserModel {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  profile_photo?: string;
  followers?: number;
  bio?: string;
  created_at?: Date;
  updated_at?: Date;
  posts?: IPostModel[];
  coments?: ICommentModel[];
}
