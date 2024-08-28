import { PlenoRepository } from "@/repositories/pleno-repository";
import { validateCpf } from "@/utils/validate-cpf";
import { validateCardNumber } from "@/utils/validate-card-number";
import { CpfInvalidError } from "./errors/cpf-invalid-error";
import { CardNumberInvalidError } from "./errors/card-number-invalid-error";

export interface CreateFormServiceRequest {
  name: string;
  lastName: string;
  email: string;
  cel: string;
  cep: string;
  address: string;
  city: string;
  state: string;
  neighborhood: string;
  number: number;
  cardNumber: string;
  validation: string;
  cvv: number;
  holderName: string;
  cpf: string;
}

interface CreateFormServiceResponse {}

export class CreateFormService {
  constructor(private plenoRepository: PlenoRepository) {}

  async execute({
    name,
    lastName,
    email,
    cel,
    cep,
    address,
    city,
    state,
    neighborhood,
    number,
    cardNumber,
    validation,
    cvv,
    holderName,
    cpf,
  }: CreateFormServiceRequest): Promise<any> {
    const cpfIsValidate = validateCpf(cpf);

    const validateCard = validateCardNumber(cardNumber);

    if (!cpfIsValidate) {
      throw new CpfInvalidError();
    }

    if (!validateCard) {
      throw new CardNumberInvalidError();
    }

    const response = await this.plenoRepository.createForm({
      name,
      lastName,
      email,
      cel,
      cep,
      address,
      city,
      state,
      neighborhood,
      number,
      cardNumber,
      validation,
      cvv,
      holderName,
      cpf,
    });

    return response;
  }
}
