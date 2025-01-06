import express from "express";
import { config } from "dotenv";
import { GetUsersRepository } from "./repositories/user/getUsers/getUsersMySql";
import { GetUsersController } from "./controllers/user/get-users/getUsersController";

config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/users", async (req, res) => {
  const mySqlGetUsersRepository = new GetUsersRepository();

  const getUsersController = new GetUsersController(mySqlGetUsersRepository);

  const { body, statusCode } = await getUsersController.handle();

  res.send(body).status(statusCode);
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
