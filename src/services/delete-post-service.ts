import { JuniorRepository } from "@/repositories/junior-repository";

interface DeletePostServiceRequest {
  id: number;
}

interface DeletePostServiceResponse {}

export class DeletePostService {
  constructor(private juniorRepository: JuniorRepository) {}

  async execute({ id }: DeletePostServiceRequest): Promise<any> {
    const response = await this.juniorRepository.delete(id);
    return response;
  }
}
