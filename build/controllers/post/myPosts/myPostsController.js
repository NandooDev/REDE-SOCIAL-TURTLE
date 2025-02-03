export class MyPostsController {
    myPostsRepository;
    constructor(myPostsRepository) {
        this.myPostsRepository = myPostsRepository;
    }
    async handle(httpRequest) {
        try {
            const { id_user } = httpRequest.body;
            const myPosts = await this.myPostsRepository.getMyPosts(id_user);
            return {
                statusCode: 200,
                body: myPosts,
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
