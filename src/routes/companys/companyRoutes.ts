import { Router } from "express";
import { CreateCompanyRepository } from "../../repositories/company/createCompany/createCompanyRepository";
import { CreateCompanyController } from "../../controllers/company/createCompany/createCompanyController";

const companyRoutes = Router();

companyRoutes.post("/create", async (req, res) => {
  const createCompanyRepository = new CreateCompanyRepository();

  const createCompanyController = new CreateCompanyController(
    createCompanyRepository
  );

  const { body, statusCode } = await createCompanyController.handle({
    body: req.body,
  });

  res.status(statusCode).send(body);
});

export { companyRoutes };
