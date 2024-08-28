import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { FindAllPostsService } from "@/services/find-all-posts-service";
import { Request, Response } from "express";
import { z } from "zod";

export class FindAllPostsController {
  async handle(req: Request, res: Response) {
    const findAllQuerySchema = z.object({
      init: z.coerce.number().min(1).default(1),
      limit: z.coerce.number(),
    });

    const findAllParamsSchema = z.object({
      init: z.coerce.number().min(1).default(1),
      limit: z.coerce.number(),
    });

    const { init, limit } = findAllQuerySchema.parse(req.query);

    console.log(req.params);

    const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
    const findAllPostsService = new FindAllPostsService(
      typeOrmJuniorRepository
    );
    const response = await findAllPostsService.execute({ init, limit });

    return res.status(200).send(response);
  }
}
