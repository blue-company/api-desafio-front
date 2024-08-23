import { FindAllPostsService } from "@/services/find-all-posts-service";
import { Request, Response } from "express";
import { z } from "zod";

export class FindAllPostsController {
  async handle(req: Request, res: Response) {
    const findAllQuerySchema = z.object({
      init: z.coerce.number().min(1).default(1),
      limit: z.coerce.number(),
    });

    const { init, limit } = findAllQuerySchema.parse(req.query);

    const findAllPostsService = new FindAllPostsService();
    const response = await findAllPostsService.execute({ init, limit });

    return res.status(200).send({ response });
  }
}
