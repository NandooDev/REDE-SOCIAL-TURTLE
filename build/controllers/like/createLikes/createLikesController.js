export class CreateLikesController {
    createLikesRepository;
    constructor(createLikesRepository) {
        this.createLikesRepository = createLikesRepository;
    }
    async handle(httpRequest) {
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
        }
        catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}
