import { FindOnePostService } from "@/services/find-one-post-service";
import { Request, Response } from "express";
import { z } from "zod";

export class FindOnePostController {
  async handle(req: Request, res: Response) {
    const findOneParamsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = findOneParamsSchema.parse(req.params);

    const findOnePostService = new FindOnePostService();

    const response = await findOnePostService.execute({ id });

    return res.status(200).send(response);
  }
}
