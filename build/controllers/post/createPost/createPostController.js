export class CreatePostController {
    createPostRepository;
    constructor(createPostRepository) {
        this.createPostRepository = createPostRepository;
    }
    async handle(httpRequest) {
        try {
            // verificar campos obrigatórios
            const requiredFields = ["title", "content", "published", "id_user"];
            for (const field of requiredFields) {
                if (!httpRequest?.body?.[field]) {
                    return {
                        statusCode: 400,
                        body: `Field ${field} is required`,
                    };
                }
            }
            const post = await this.createPostRepository.createPost(httpRequest.body);
            return {
                statusCode: 201,
                body: post,
            };
        }
        catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        }
    }
}
