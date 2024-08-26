import { JuniorRepository } from "@/repositories/junior-repository";

interface UpdatePostServiceRequest {
  author?: string;
  title?: string;
  description?: string;
}

interface UpdatePostServiceResponse {}

export class UpdatePostService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute(id: number, data: UpdatePostServiceRequest): Promise<any> {
    const response = await this.juniorRepository.update(id, data);
    return response;
  }
}
