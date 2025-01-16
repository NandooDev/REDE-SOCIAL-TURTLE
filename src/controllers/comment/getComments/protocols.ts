import { ICommentModel } from "../../../models/iCommentModel";
import { IHttpResponse } from "../../protocols";

export interface IGetCommentsRepository {
    getComments(): Promise<ICommentModel[]>;
  }
  
  export interface IGetCommentsController {
    handle(): Promise<IHttpResponse<ICommentModel[]>>;
  }