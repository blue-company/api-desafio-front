import { PlenoRepository } from "@/repositories/pleno-repository";

interface FindAllFromsServiceRequest {
  name?: string;
  email?: string;
  cell?: string;
  cep?: string;
  address?: string;
  city?: string;
  state?: string;
  neighborhood?: string;
  cpf?: string;
}

interface FindAllFromsServiceResponse {}

export class FindAllFormsService {
  constructor(private plenoRepository: PlenoRepository) {}

  async execute(
    init: number,
    limit: number,
    data: FindAllFromsServiceRequest
  ): Promise<any> {
    const response = await this.plenoRepository.findAllForm(init, limit, data);
    return response;
  }
}
