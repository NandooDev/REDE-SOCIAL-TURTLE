export class MyLikesController {
    myLikesRepository;
    constructor(myLikesRepository) {
        this.myLikesRepository = myLikesRepository;
    }
    async handle(httpRequest) {
        try {
            const { id_user } = httpRequest.body;
            const myLikes = await this.myLikesRepository.getMyLikes(id_user);
            return {
                statusCode: 200,
                body: myLikes,
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
