import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { CreateFormService } from "@/services/create-form-service";
import { CreateListProductsService } from "@/services/create-list-produts-service";
import { CardNumberInvalidError } from "@/services/errors/card-number-invalid-error";
import { CpfInvalidError } from "@/services/errors/cpf-invalid-error";
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

      const photos = "req.file as Express.Multer.File;";

      const { name, description, price } = createFormBodySchema.parse(req.body);
      const typeOrmPlenoRepository = new TypeOrmPlenoRepository();
      const createProductsService = new CreateListProductsService(
        typeOrmPlenoRepository
      );

      await createProductsService.execute({ name, description, price, photos });
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
