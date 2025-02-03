export class CreateCommentsController {
    createCommentsRepository;
    constructor(createCommentsRepository) {
        this.createCommentsRepository = createCommentsRepository;
    }
    async handle(httpRequest) {
        try {
            const { content, id_post, id_user } = httpRequest.body;
            if (!content || !id_post || !id_user) {
                return {
                    statusCode: 400,
                    body: "Missing required fields",
                };
            }
            const comment = await this.createCommentsRepository.createComment({
                content,
                id_post,
                id_user,
            });
            return {
                statusCode: 201,
                body: comment,
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
