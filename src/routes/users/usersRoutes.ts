import { Router } from "express";
import { GetUsersController } from "../../controllers/user/get-users/getUsersController";
import { GetUsersRepository } from "../../repositories/user/getUsers/getUsersRepository";
import { CreateUsersRepository } from "../../repositories/user/createUsers/createUsersRepository";
import { CreateUsersController } from "../../controllers/user/createUsers/createUsersController";

const userRoutes: Router = Router();

userRoutes.get("/", async (req, res) => {
  const getUsersRepository = new GetUsersRepository();

  const getUsersController = new GetUsersController(getUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

userRoutes.post("/create", async (req, res) => {
  const createUsersRepository = new CreateUsersRepository();

  const createUsersController = new CreateUsersController(
    createUsersRepository
  );

  const { body, statusCode } = await createUsersController.handle({
    body: req.body,
  });

  res.send(body).status(statusCode);
});

export { userRoutes };
