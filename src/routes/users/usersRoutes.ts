import { Router } from "express";
import { GetUsersController } from "../../controllers/user/get-users/getUsersController";
import { GetUsersRepository } from "../../repositories/user/getUsers/getUsersRepository";
import { CreateUsersRepository } from "../../repositories/user/createUsers/createUsersRepository";
import { CreateUsersController } from "../../controllers/user/createUsers/createUsersController";
import { UpdateUsersRepository } from "../../repositories/user/updateUsers/updateUsersRepository";
import { UpdateUsersController } from "../../controllers/user/updateUsers/updateUsersController";
import { DeleteUsersRepository } from "../../repositories/user/deleteUsers/deleteUsersRepository";
import { DeleteUsersController } from "../../controllers/user/deleteUsers/deleteUsersController";

const userRoutes: Router = Router();

userRoutes.get("/", async (req, res) => {
  const getUsersRepository = new GetUsersRepository();

  const getUsersController = new GetUsersController(getUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.status(statusCode).send(body);
});

userRoutes.post("/create", async (req, res) => {
  const createUsersRepository = new CreateUsersRepository();

  const createUsersController = new CreateUsersController(
    createUsersRepository
  );

  const { body, statusCode } = await createUsersController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

userRoutes.patch("/update/:id", async (req, res) => {
  const updateUsersRepository = new UpdateUsersRepository();

  const updateUsersController = new UpdateUsersController(
    updateUsersRepository
  );

  const { body, statusCode } = await updateUsersController.handle({
    body: req.body,
    params: req.params,
  });

  res.status(statusCode).send(body);
});

userRoutes.delete("/delete/:id", async (req, res) => {
  const deleteUsersRepository = new DeleteUsersRepository();

  const deleteUsersController = new DeleteUsersController(
    deleteUsersRepository
  );

  const { body, statusCode } = await deleteUsersController.handle({
    params: req.params,
  });

  res.status(statusCode).send(body);
});

export { userRoutes };
