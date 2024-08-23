import { CreateFormController } from "@/controllers/pleno/create-form-controller";
import { FindAllFormsController } from "@/controllers/pleno/find-all-forms-controller";
import { Router } from "express";

const plenoRoutes = Router();

const createForm = new CreateFormController();
const findAllForms = new FindAllFormsController();

plenoRoutes.post("/", createForm.handle);
plenoRoutes.get("/", findAllForms.handle);

export { plenoRoutes };
