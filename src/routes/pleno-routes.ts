import { CreateFormController } from "@/controllers/pleno/create-form-controller";
import { CreateListProductsController } from "@/controllers/pleno/create-list-products-controller";
import { FindAllProductsController } from "@/controllers/pleno/find-all-products-controller";
import { Router } from "express";
import multer from "multer";

const plenoRoutes = Router();
const upload = multer();

const createForm = new CreateFormController();
const createListProducts = new CreateListProductsController();
const findAllProducts = new FindAllProductsController();

plenoRoutes.post("/", createForm.handle);
plenoRoutes.post(
  "/create-list-produts",
  upload.single("file"),
  createListProducts.handle
);
plenoRoutes.get("/", findAllProducts.handle);

export { plenoRoutes };
