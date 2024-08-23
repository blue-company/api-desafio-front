import { CreatePostService } from "@/services/create-post-service";
import { Request, Response } from "express";
import { z } from "zod";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const createBodySchema = z.object({
      author: z.string(),
      title: z.string(),
      description: z.string(),
    });

    const { author, title, description } = createBodySchema.parse(req.body);

    try {
      const createPostService = new CreatePostService();
      await createPostService.execute({ author, title, description });
    } catch (err) {
      // if (err instanceof UserAlreadyExistsError) {
      //   return reply.status(409).send({ message: err.message });
      // }

      throw err;
    }

    return res.status(201).send();
  }
}
