import { JuniorRepository } from "@/repositories/junior-repository";

interface DeletePostServiceRequest {
  profileGithub: string;
  id: number;
}

interface DeletePostServiceResponse {}

export class DeletePostService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute({ profileGithub, id }: DeletePostServiceRequest): Promise<any> {
    const post = await this.juniorRepository.findOne(profileGithub, id);

    if (!post) {
      throw new Error();
    }

    const response = await this.juniorRepository.delete(id);
    return response;
  }
}
