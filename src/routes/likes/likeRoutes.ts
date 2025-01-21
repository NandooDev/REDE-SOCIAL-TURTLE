import { Router } from "express";
import { GetLikesRepository } from "../../repositories/like/getLikes/getLikesRepository";
import { GetLikesController } from "../../controllers/like/getLikes/getLikesController";
import { CreateLikesRepository } from "../../repositories/like/createLikes/createLikesRepository";
import { CreateLikesController } from "../../controllers/like/createLikes/createLikesController";
import { DeleteLikesRepository } from "../../repositories/like/deleteLikes/deleteLikesRepository";
import { DeleteLikesController } from "../../controllers/like/deleteLikes/deleteLikesController";
import { MyLikesRepository } from "../../repositories/like/myLikes/myLikesRepository";
import { MyLikesController } from "../../controllers/like/myLikes/myLikesController";

const likeRoutes = Router();

likeRoutes.get("/", async (req, res) => {
  const getLikesRepository = new GetLikesRepository();

  const getLikesController = new GetLikesController(getLikesRepository);

  const { body, statusCode } = await getLikesController.handle();

  res.status(statusCode).send(body);
});

likeRoutes.post("/create/posts/:id_post/:id_user", async (req, res) => {
  const createLikesRepository = new CreateLikesRepository();

  const createLikesController = new CreateLikesController(
    createLikesRepository
  );

  const { body, statusCode } = await createLikesController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

likeRoutes.delete("/delete/:id", async (req, res) => {
  const deleteLikesRepository = new DeleteLikesRepository();

  const deleteLikesController = new DeleteLikesController(
    deleteLikesRepository
  );

  const { body, statusCode } = await deleteLikesController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

likeRoutes.get("/myLikes", async (req, res) => {
  const myLikesRepository = new MyLikesRepository();

  const myLikesController = new MyLikesController(myLikesRepository);

  const { body, statusCode } = await myLikesController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { likeRoutes };
