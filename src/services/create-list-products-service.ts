import { PlenoRepository } from "@/repositories/pleno-repository";

interface CreateProductServiceRequest {
  name: string;
  description: string;
  price: number;
  urlPhoto: string;
}

export class CreateListProductsService {
  constructor(private plenoRepository: PlenoRepository) {}

  async execute(data: CreateProductServiceRequest): Promise<any> {
    const produt = this.plenoRepository.createProducts({
      ...data,
      photos: data.urlPhoto,
      create_at: new Date(),
    });

    return produt;
  }
}
