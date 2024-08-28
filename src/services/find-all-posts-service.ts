import { JuniorRepository } from "@/repositories/junior-repository";

interface FindAllPostsServiceRequest {
  profileGithub: string;
  init: number;
  limit: number;
}

interface FindAllPostsServiceResponse {}

export class FindAllPostsService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute({
    profileGithub,
    init,
    limit,
  }: FindAllPostsServiceRequest): Promise<any> {
    const response = await this.juniorRepository.findAll(
      profileGithub,
      init,
      limit
    );

    return response;
  }
}
