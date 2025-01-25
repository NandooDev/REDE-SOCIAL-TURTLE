import { Router } from "express";
import { GetUsersController } from "../../controllers/user/getUsers/getUsersController";
import { GetUsersRepository } from "../../repositories/user/getUsers/getUsersRepository";
import { CreateUsersRepository } from "../../repositories/user/createUsers/createUsersRepository";
import { CreateUsersController } from "../../controllers/user/createUsers/createUsersController";
import { UpdateUsersRepository } from "../../repositories/user/updateUsers/updateUsersRepository";
import { UpdateUsersController } from "../../controllers/user/updateUsers/updateUsersController";
import { DeleteUsersRepository } from "../../repositories/user/deleteUsers/deleteUsersRepository";
import { DeleteUsersController } from "../../controllers/user/deleteUsers/deleteUsersController";
import { CryptographyPassword } from "../../cryptography/cryptographyPassword";
import { LoginUsersRepository } from "../../repositories/user/loginUsers/loginUsersRepository";
import { LoginUsersController } from "../../controllers/user/loginUsers/loginUsersController";
import { GetUsersByUsernameRepository } from "../../repositories/user/getUsersByUsername/getUsersByUsernameRepository";
import { GetUsersByUsernameController } from "../../controllers/user/getUsersByUsername/getUsersByUsernameController";

const userRoutes: Router = Router();

userRoutes.get("/", async (req, res) => {
  const getUsersRepository = new GetUsersRepository();

  const getUsersController = new GetUsersController(getUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.status(statusCode).send(body);
});

userRoutes.post("/create", async (req, res) => {
  const createUsersRepository = new CreateUsersRepository();
  const cryptographyPassword = new CryptographyPassword();

  const createUsersController = new CreateUsersController(
    createUsersRepository,
    cryptographyPassword
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

userRoutes.post("/login", async (req, res) => {
  const loginUsersRepository = new LoginUsersRepository();

  const loginUsersController = new LoginUsersController(loginUsersRepository);

  const { body, statusCode } = await loginUsersController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

userRoutes.get("/findUsername", async (req, res) => {
  const getUsersByUsernameRepository = new GetUsersByUsernameRepository();

  const getUsersByUsernameController = new GetUsersByUsernameController(
    getUsersByUsernameRepository
  );

  console.log(req.body.username);

  const { body, statusCode } = await getUsersByUsernameController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { userRoutes };
