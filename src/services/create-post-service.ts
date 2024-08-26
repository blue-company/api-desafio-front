import { JuniorRepository } from "@/repositories/junior-repository";

interface CreatePostServiceRequest {
  author: string;
  title: string;
  description: string;
}

interface CreatePostServiceResponse {}

export class CreatePostService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute({
    author,
    title,
    description,
  }: CreatePostServiceRequest): Promise<any> {
    const response = await this.juniorRepository.create({
      author,
      title,
      description,
      create_at: new Date(),
    });

    return response;
  }
}
