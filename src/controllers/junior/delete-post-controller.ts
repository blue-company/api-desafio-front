import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { DeletePostService } from "@/services/delete-post-service";
import { makeDeletePostService } from "@/services/factories/make-delete-post-service";
import { Request, Response } from "express";
import { z } from "zod";

export class DeletePostController {
  async handle(req: Request, res: Response) {
    const deleteParamsSchema = z.object({
      profileGithub: z.string(),
      id: z.coerce.number(),
    });

    const { profileGithub, id } = deleteParamsSchema.parse(req.params);

    try {
      const deletePostService = makeDeletePostService();
      await deletePostService.execute({ profileGithub, id });
    } catch (error) {
      res.status(400).send({ message: "Post não existe!" });
    }

    res.status(200).json({ message: "Deletado com sucesso" });
  }
}
