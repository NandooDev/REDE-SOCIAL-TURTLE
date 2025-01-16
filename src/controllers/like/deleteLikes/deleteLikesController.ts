import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteLikesController, IDeleteLikesRepository } from "./protocols";

export class DeleteLikesController implements IDeleteLikesController {
    constructor(private readonly deleteLikesRepository: IDeleteLikesRepository) {}
  
    async handle(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<string>> {
      try {
        const id = httpRequest.params?.id;
  
        if (!id) {
          return {
            statusCode: 400,
            body: "Missing like id",
          };
        }
  
        const result = await this.deleteLikesRepository.deleteLike(id);
  
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