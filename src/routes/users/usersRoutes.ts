import { Router } from "express";
import { GetUsersController } from "../../controllers/user/get-users/getUsersController";
import { GetUsersRepository } from "../../repositories/user/getUsers/getUsersMySql";

const userRoutes: Router = Router();

userRoutes.get("/", async (req, res) => {
    const mySqlGetUsersRepository = new GetUsersRepository();

    const getUsersController = new GetUsersController(mySqlGetUsersRepository);
  
    const { body, statusCode } = await getUsersController.handle();
  
    res.send(body).status(statusCode);
});

export { userRoutes };
