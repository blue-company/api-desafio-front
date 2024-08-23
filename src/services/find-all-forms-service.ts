import { PlenoRepository } from "@/repositories/pleno-repository";

interface FindAllFromsServiceRequest {}

interface FindAllFromsServiceResponse {}

export class FindAllFromsService {
  // constructor(private plenoRepository: PlenoRepository) {}

  async execute({}: FindAllFromsServiceRequest): Promise<any> {
    // const response = await this.plenoRepository.findAllForm(data);
    // return response;
  }
}
