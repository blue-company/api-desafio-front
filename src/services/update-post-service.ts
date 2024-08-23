import { JuniorRepository } from "@/repositories/junior-repository";

interface UpdatePostServiceRequest {
  author?: string;
  title?: string;
  description?: string;
}

interface UpdatePostServiceResponse {}

export class UpdatePostService {
  // constructor(private juniorRepository: JuniorRepository) {}

  async execute(
    id: number,
    { author, title, description }: UpdatePostServiceRequest
  ): Promise<any> {
    // const response = await this.juniorRepository.update(data);
    // return response;
  }
}
