export class DeleteLikesController {
    deleteLikesRepository;
    constructor(deleteLikesRepository) {
        this.deleteLikesRepository = deleteLikesRepository;
    }
    async handle(httpRequest) {
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
        }
        catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}
