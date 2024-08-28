import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { CreateFormService } from "@/services/create-form-service";
import { CreateListProductsService } from "@/services/create-list-produts-service";
import { CardNumberInvalidError } from "@/services/errors/card-number-invalid-error";
import { CpfInvalidError } from "@/services/errors/cpf-invalid-error";
import { makeCreateListProductsService } from "@/services/factories/make-create-list-products-service";
import { GenerateUrlService } from "@/services/generate-url-service";
import { Request, Response } from "express";
import { z, ZodError } from "zod";

export class CreateListProductsController {
  async handle(req: Request, res: Response) {
    try {
      const createFormBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        price: z.coerce.number(),
      });

      const photo = req.file as Express.Multer.File;

      const generateUrlService = new GenerateUrlService();
      const urlPhoto = await generateUrlService.execute(
        req.hostname,
        req.protocol,
        photo
      );

      const { name, description, price } = createFormBodySchema.parse(req.body);

      const createProductsService = makeCreateListProductsService();

      await createProductsService.execute({
        name,
        description,
        price,
        urlPhoto,
      });

      return res.status(201).send();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Dados enviado inválidos!",
        });
      }
      throw error;
    }
  }
}
