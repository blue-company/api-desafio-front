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
      const deletePostService = new DeletePostService();
      await deletePostService.execute({ id });
    } catch (error) {
      res.status(400).send("Post não existe!");
    }

    res.status(200).send("Deletado com sucesso");
  }
}
