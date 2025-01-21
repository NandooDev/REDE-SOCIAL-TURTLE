import { ICommentModel } from "../../../models/iCommentModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IMyCommentsController, IMyCommentsRepository } from "./protocols";

export class MyCommentsController implements IMyCommentsController {
  constructor(private readonly myCommentsRepository: IMyCommentsRepository) {}
  async handle(
    httpRequest: IHttpRequest<ICommentModel[]>
  ): Promise<IHttpResponse<ICommentModel[]>> {
    try {
      const { id_user } = httpRequest.body;

      const myComments = await this.myCommentsRepository.getMyComments(id_user);

      return {
        statusCode: 200,
        body: myComments,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
