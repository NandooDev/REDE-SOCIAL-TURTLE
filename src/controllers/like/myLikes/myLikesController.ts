import { ILikeModel } from "../../../models/iLikeModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IMyLikesController, IMyLikesRepository } from "./protocols";

export class MyLikesController implements IMyLikesController {
  constructor(private readonly myLikesRepository: IMyLikesRepository) {}
  async handle(
    httpRequest: IHttpRequest<ILikeModel[]>
  ): Promise<IHttpResponse<ILikeModel[]>> {
    try {
      const { id_user } = httpRequest.body;

      const myLikes = await this.myLikesRepository.getMyLikes(id_user);

      return {
        statusCode: 200,
        body: myLikes,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
