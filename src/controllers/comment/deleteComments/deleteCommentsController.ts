import { IHttpRequest, IHttpResponse } from "../../protocols";
import { IDeleteCommentsController, IDeleteCommentsRepository } from "./protocols";

export class DeleteCommentsController implements IDeleteCommentsController {
    constructor(private readonly deleteCommentsRepository: IDeleteCommentsRepository) {}
  
    async handle(httpRequest: IHttpRequest<string>): Promise<IHttpResponse<string>> {
      try {
        const id = httpRequest.params?.id;
  
        if (!id) {
          return {
            statusCode: 400,
            body: "Missing comment id",
          };
        }
  
        const result = await this.deleteCommentsRepository.deleteComment(id);
  
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