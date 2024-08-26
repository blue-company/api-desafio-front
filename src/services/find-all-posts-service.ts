import { JuniorRepository } from "@/repositories/junior-repository";

interface FindAllPostsServiceRequest {
  init: number;
  limit: number;
}

interface FindAllPostsServiceResponse {}

export class FindAllPostsService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute({ init, limit }: FindAllPostsServiceRequest): Promise<any> {
    const response = await this.juniorRepository.findAll(init, limit);

    return response;
  }
}
