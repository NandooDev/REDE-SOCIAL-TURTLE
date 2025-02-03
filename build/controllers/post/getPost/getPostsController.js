export class GetPostsController {
    getPostsRepository;
    constructor(getPostsRepository) {
        this.getPostsRepository = getPostsRepository;
    }
    async handle() {
        try {
            const posts = await this.getPostsRepository.getPosts();
            return {
                statusCode: 200,
                body: posts,
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
