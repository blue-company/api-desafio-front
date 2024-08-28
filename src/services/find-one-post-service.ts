import { JuniorRepository } from "@/repositories/junior-repository";

interface FindOnePostServiceRequest {
  profileGithub: string;
  id: number;
}

interface FindOnePostServiceResponse {}

export class FindOnePostService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute({
    profileGithub,
    id,
  }: FindOnePostServiceRequest): Promise<any> {
    const response = await this.juniorRepository.findOne(profileGithub, id);
    return response;
  }
}
