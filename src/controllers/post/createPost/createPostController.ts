import { IPostModel } from "../../../models/iPostModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import {
  ICreatePostController,
  ICreatePostRepository,
  IPostParams,
} from "./protocols";

export class CreatePostController implements ICreatePostController {
  constructor(private readonly createPostRepository: ICreatePostRepository) {}
  async handle(
    httpRequest: IHttpRequest<IPostParams>
  ): Promise<IHttpResponse<IPostModel>> {
    try {
      // verificar campos obrigatórios
      const requiredFields = [
        "title",
        "content",
        "published",
        "id_user",
      ];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof IPostParams]) {
          return {
            statusCode: 400,
            body: `Field ${field} is required`,
          };
        }
      }

      const post = await this.createPostRepository.createPost(httpRequest.body!);

      return {
        statusCode: 201,
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
