import { IPostModel } from "../../../models/iPostModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  IUpdatePostsPublishedController,
  IUpdatePostsPublishedRepository,
} from "./protocols";

export class UpdatePostsPublishedController
  implements IUpdatePostsPublishedController
{
  constructor(
    private readonly updatePostsPublishedRepository: IUpdatePostsPublishedRepository
  ) {}

  async handle(
    httpRequest: IHttpRequest<any>
  ): Promise<IHttpResponse<IPostModel>> {
    try {
      const id = httpRequest.params?.id;
      const { published } = httpRequest.body;

      console.log(id, typeof published);

      if (!id || typeof published !== "boolean") {
        return {
          statusCode: 400,
          body: "Invalid request",
        };
      }

      const post = await this.updatePostsPublishedRepository.updatePublished(
        id,
        published
      );

      return {
        statusCode: 200,
        body: post,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
