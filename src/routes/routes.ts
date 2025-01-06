import { Router } from "express";
import { userRoutes } from "./users/usersRoutes";

const routes: Router = Router();

routes.use("/users", userRoutes);

export { routes };
