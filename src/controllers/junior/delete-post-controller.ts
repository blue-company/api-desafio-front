import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { DeletePostService } from "@/services/delete-post-service";
import { Request, Response } from "express";
import { z } from "zod";

export class DeletePostController {
  async handle(req: Request, res: Response) {
    const deleteParamsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = deleteParamsSchema.parse(req.params);

    try {
      const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
      const deletePostService = new DeletePostService(typeOrmJuniorRepository);
      await deletePostService.execute({ id });
    } catch (error) {
      res.status(400).send({ message: "Post não existe!" });
    }

    res.status(200).json({ message: "Deletado com sucesso" });
  }
}
