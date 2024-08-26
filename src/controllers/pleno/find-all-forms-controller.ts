import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { FindAllFormsService } from "@/services/find-all-forms-service";
import { Request, Response } from "express";
import { z } from "zod";

export class FindAllFormsController {
  async handle(req: Request, res: Response) {
    const findAllFormsQuerySchema = z.object({
      init: z.coerce.number().min(1).default(1),
      limit: z.coerce.number(),
      name: z.string().optional(),
      email: z.string().optional(),
      cell: z.string().optional(),
      cep: z.string().optional(),
      address: z.string().optional(),
      city: z.string().optional(),
      state: z.string().optional(),
      neighborhood: z.string().optional(),
      cpf: z.string().optional(),
    });

    const {
      init,
      limit,
      name,
      email,
      cell,
      cep,
      address,
      city,
      state,
      neighborhood,
      cpf,
    } = findAllFormsQuerySchema.parse(req.query);

    const typeOrmPlenoRepository = new TypeOrmPlenoRepository();
    const findAllFormsService = new FindAllFormsService(typeOrmPlenoRepository);

    const response = await findAllFormsService.execute(init, limit, {
      name,
      email,
      cell,
      cep,
      address,
      city,
      state,
      neighborhood,
      cpf,
    });

    return res.status(200).send(response);
  }
}
