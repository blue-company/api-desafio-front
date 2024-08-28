import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { makeFindAllPostsService } from "@/services/factories/make-find-all-posts-service";
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
      profileGithub: z.string(),
    });

    const { init, limit } = findAllQuerySchema.parse(req.query);
    const { profileGithub } = findAllParamsSchema.parse(req.params);

    const findAllPostsService = makeFindAllPostsService();

    const response = await findAllPostsService.execute({
      profileGithub,
      init,
      limit,
    });

    return res.status(200).send(response);
  }
}
