import { ICommentModel } from "../../../models/iCommentModel";
import { IHttpResponse } from "../../protocols";
import { IGetCommentsController, IGetCommentsRepository } from "./protocols";

export class GetCommentsController implements IGetCommentsController {
  constructor(private readonly getCommentsRepository: IGetCommentsRepository) {}

  async handle(): Promise<IHttpResponse<ICommentModel>> {
    try {
      const comments = await this.getCommentsRepository.getComments();

      return {
        statusCode: 200,
        body: comments,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
