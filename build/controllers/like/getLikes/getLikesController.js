export class GetLikesController {
    getLikesRepository;
    constructor(getLikesRepository) {
        this.getLikesRepository = getLikesRepository;
    }
    async handle() {
        try {
            const likes = await this.getLikesRepository.getLikes();
            return {
                statusCode: 200,
                body: likes,
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
