import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeletePostsController, IDeletePostsRepository } from "./protocols";

export class DeletePostsController implements IDeletePostsController {
  constructor(private readonly deletePostsRepository: IDeletePostsRepository) {}

  async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<string>> {
    try {
      const id = httpRequest.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: "Missing post id",
        };
      }

      const result = await this.deletePostsRepository.deletePost(id);

      return {
        statusCode: 200,
        body: result,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
