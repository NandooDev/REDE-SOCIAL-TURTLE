import { Router } from "express";
import { GetLikesRepository } from "../../repositories/like/getLikes/getLikesRepository";
import { GetLikesController } from "../../controllers/like/getLikes/getLikesController";

const likeRoutes = Router();

likeRoutes.get("/", async (req, res) => {
  const getLikesRepository = new GetLikesRepository();

  const getLikesController = new GetLikesController(getLikesRepository);

  const { body, statusCode } = await getLikesController.handle();

  res.status(statusCode).send(body);
});

export { likeRoutes };
