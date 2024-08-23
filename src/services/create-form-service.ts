import { PlenoRepository } from "@/repositories/pleno-repository";

interface CreateFormServiceRequest {
  author: string;
  title: string;
  description: string;
}

interface CreateFormServiceResponse {}

export class CreateFormService {
  // constructor(private plenoRepository: PlenoRepository) {}

  async execute({
    author,
    title,
    description,
  }: CreateFormServiceRequest): Promise<any> {
    // const response = await this.plenoRepository.createForm(data);
    // return response;
  }
}
