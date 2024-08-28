import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { FindAllProductsService } from "@/services/find-all-products-service";
import { Request, Response } from "express";
import { z } from "zod";

export class FindAllProductsController {
  async handle(req: Request, res: Response) {
    const findAllFormsQuerySchema = z.object({
      init: z.coerce.number().min(1).default(1),
      limit: z.coerce.number(),
      name: z.string().optional(),
    });

    const { init, limit, name } = findAllFormsQuerySchema.parse(req.query);

    const typeOrmPlenoRepository = new TypeOrmPlenoRepository();
    const findAllProductsService = new FindAllProductsService(
      typeOrmPlenoRepository
    );

    const response = await findAllProductsService.execute(init, limit, {
      name,
    });

    return res.status(200).send(response);
  }
}
