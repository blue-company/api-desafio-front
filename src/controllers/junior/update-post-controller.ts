import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { makeUpdatePostService } from "@/services/factories/make-update-post-service";
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
      profileGithub: z.string(),
      id: z.coerce.number(),
    });

    const { author, title, description } = updateBodySchema.parse(req.body);
    const { profileGithub, id } = updateParamsSchema.parse(req.params);

    const updateService = makeUpdatePostService();

    await updateService.execute(profileGithub, id, {
      author,
      title,
      description,
    });

    return res.status(200).json({ message: "Atualizado!" });
  }
}
