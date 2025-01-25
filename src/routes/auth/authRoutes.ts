import { Router } from "express";
import { NewAcessToken } from "../../auth/newAcessToken/newAcessToken";
import { NewAcessTokenController } from "../../controllers/auth/newAcessToken/newAcessTokenController";

const authRoutes = Router();

authRoutes.post("/refresh", async (req, res) => {
  const newAcessToken = new NewAcessToken();

  const newAcessTokenController = new NewAcessTokenController(newAcessToken);

  const { statusCode, body } = await newAcessTokenController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { authRoutes };
