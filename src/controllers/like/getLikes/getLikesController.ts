import { ILikeModel } from "../../../models/iLikeModel";
import { IHttpResponse } from "../../protocols";
import { IGetLikesController, IGetLikesRepository } from "./protocols";

export class GetLikesController implements IGetLikesController {
  constructor(private readonly getLikesRepository: IGetLikesRepository) {}

  async handle(): Promise<IHttpResponse<ILikeModel[]>> {
    try {
      const likes = await this.getLikesRepository.getLikes();

      return {
        statusCode: 200,
        body: likes,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
