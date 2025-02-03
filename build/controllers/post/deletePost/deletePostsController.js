export class DeletePostsController {
    deletePostsRepository;
    constructor(deletePostsRepository) {
        this.deletePostsRepository = deletePostsRepository;
    }
    async handle(httpRequest) {
        try {
            const id = httpRequest.params?.id;
            if (!id) {
                return {
                    statusCode: 400,
                    body: "Missing post id",
                };
            }
            const result = await this.deletePostsRepository.deletePost(id);
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
