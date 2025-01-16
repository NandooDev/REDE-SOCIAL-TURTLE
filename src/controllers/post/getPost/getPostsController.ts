import { IPostModel } from "../../../models/iPostModel";
import { IHttpResponse } from "../../protocols";
import { IGetPostsController, IGetPostsRepository } from "./protocols";

export class GetPostsController implements IGetPostsController {
  constructor(private readonly getPostsRepository: IGetPostsRepository) {}

  async handle(): Promise<IHttpResponse<IPostModel[]>> {
    try {
      const posts = await this.getPostsRepository.getPosts();

      return {
        statusCode: 200,
        body: posts,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
