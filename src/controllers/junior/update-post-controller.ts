import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { UpdatePostService } from "@/services/update-post-service";
import { Request, Response } from "express";
import { z } from "zod";

export class UpdatePostController {
  async handle(req: Request, res: Response) {
    const updateBodySchema = z.object({
      author: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
    });

    const updateParamsSchema = z.object({
      id: z.coerce.number(),
    });

    const { author, title, description } = updateBodySchema.parse(req.body);
    const { id } = updateParamsSchema.parse(req.params);

    const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
    const updateService = new UpdatePostService(typeOrmJuniorRepository);
    await updateService.execute(id, { author, title, description });

    return res.status(200).json({ message: "Atualizado!" });
  }
}
