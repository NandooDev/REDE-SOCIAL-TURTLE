import { IPostModel } from "../../../models/iPostModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IMyPostsController, IMyPostsRepository } from "./protocols";

export class MyPostsController implements IMyPostsController {
  constructor(private readonly myPostsRepository: IMyPostsRepository) {}
  async handle(
    httpRequest: IHttpRequest<IPostModel[]>
  ): Promise<IHttpResponse<IPostModel[]>> {
    try {
      const { id_user } = httpRequest.body;

      const myPosts = await this.myPostsRepository.getMyPosts(id_user);

      return {
        statusCode: 200,
        body: myPosts,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
