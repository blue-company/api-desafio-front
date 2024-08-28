import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { FindOnePostService } from "@/services/find-one-post-service";
import { Request, Response } from "express";
import { z } from "zod";

export class FindOnePostController {
  async handle(req: Request, res: Response) {
    const findOneParamsSchema = z.object({
      profileGithub: z.string(),
      id: z.coerce.number(),
    });

    const findAllParamsSchema = z.object({
      profileGithub: z.string(),
    });

    const { profileGithub, id } = findOneParamsSchema.parse(req.params);

    const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
    const findOnePostService = new FindOnePostService(typeOrmJuniorRepository);

    const response = await findOnePostService.execute({ profileGithub, id });

    return res.status(200).send(response);
  }
}
