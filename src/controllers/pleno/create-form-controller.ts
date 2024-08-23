import { Request, Response } from "express";
import { z } from "zod";

export class CreateFormController {
  async handle(req: Request, res: Response) {
    const createFormBodySchema = z.object({
      name: z.string(),
      lastName: z.string(),
      email: z.string(),
      cel: z.string(),
      cep: z.string(),
      address: z.string(),
      city: z.string(),
      state: z.string(),
      neighborhood: z.string(),
      number: z.number(),
      cardNumber: z.string(),
      validation: z.string(),
      cvv: z.number(),
      holderName: z.string(),
      cpf: z.string(),
    });

    const {
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
      cvv,
      holderName,
      cpf,
    } = createFormBodySchema.parse(req.body);

    // try {
    //   const createFormService = new CreateFormService();

    //   await createFormService.execute({
    //     name,
    //     lastName,
    //     email,
    //     cel,
    //     cep,
    //     address,
    //     city,
    //     state,
    //     neighborhood,
    //     number,
    //     cardNumber,
    //     cvv,
    //     holderName,
    //     cpf,
    //   });
    // } catch (error) {}

    // return res.status(201).send();
  }
}
