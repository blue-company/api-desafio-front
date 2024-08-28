import { PlenoRepository } from "@/repositories/pleno-repository";

interface FindAllProductsServiceRequest {
  name?: string;
}

interface FindAllFromsServiceResponse {}

export class FindAllProductsService {
  constructor(private plenoRepository: PlenoRepository) {}

  async execute(
    init: number,
    limit: number,
    data: FindAllProductsServiceRequest
  ): Promise<any> {
    const response = await this.plenoRepository.findAllProducts(
      init,
      limit,
      data
    );
    return response;
  }
}
