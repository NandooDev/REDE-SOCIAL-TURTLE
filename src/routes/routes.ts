import { Router } from "express";
import { userRoutes } from "./users/usersRoutes";
import { profileRoutes } from "./users/profileRoutes";

const routes: Router = Router();

routes.use("/users", userRoutes);
routes.use("/profile", profileRoutes);

export { routes };
