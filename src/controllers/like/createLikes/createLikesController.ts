import { ILikeModel } from "../../../models/iLikeModel";
import { IHttpRequest, IHttpResponse } from "../../protocols";
import { ICreateLikesController, ICreateLikesRepository } from "./protocols";

export class CreateLikesController implements ICreateLikesController {
    constructor(private readonly createLikesRepository: ICreateLikesRepository) {}
  
    async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<ILikeModel[]>> {
      try {
        const { id_post, id_user } = httpRequest.params;
  
        if (!id_post || !id_user) {
          return {
            statusCode: 400,
            body: "Missing required fields",
          };
        }
  
        const like = await this.createLikesRepository.createLike({ id_post, id_user });
  
        return {
          statusCode: 201,
          body: like,
        };
      } catch (error) {
        return {
          statusCode: 500,
          body: "Something went wrong",
        };
      }
    }
  }