export class DeleteCommentsController {
    deleteCommentsRepository;
    constructor(deleteCommentsRepository) {
        this.deleteCommentsRepository = deleteCommentsRepository;
    }
    async handle(httpRequest) {
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
        }
        catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}
