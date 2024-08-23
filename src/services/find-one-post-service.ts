import { JuniorRepository } from "@/repositories/junior-repository";

interface FindOnePostServiceRequest {
  id: number;
}

interface FindOnePostServiceResponse {}

export class FindOnePostService {
  // constructor(private juniorRepository: JuniorRepository) {}

  async execute({ id }: FindOnePostServiceRequest): Promise<any> {
    // const response = await this.juniorRepository.findOne(init, limit);
    // return response;
  }
}
