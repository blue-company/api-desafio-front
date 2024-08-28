import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { CreatePostService } from "@/services/create-post-service";
import { GenerateUrlService } from "@/services/generate-url-service";
import { Request, Response } from "express";
import { z } from "zod";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    const createBodySchema = z.object({
      author: z.string(),
      title: z.string(),
      description: z.string(),
    });

    const createParamsSchema = z.object({
      profileGithub: z.string(),
    });

    const { author, title, description } = createBodySchema.parse(req.body);
    const { profileGithub } = createParamsSchema.parse(req.params);

    try {
      const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
      const createPostService = new CreatePostService(typeOrmJuniorRepository);
      await createPostService.execute({
        author,
        title,
        description,
        profileGithub,
      });
    } catch (err) {
      throw err;
    }

    return res.status(201).send();
  }
}
