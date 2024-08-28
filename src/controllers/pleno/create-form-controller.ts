import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { CreateFormService } from "@/services/create-form-service";
import { CardNumberInvalidError } from "@/services/errors/card-number-invalid-error";
import { CpfInvalidError } from "@/services/errors/cpf-invalid-error";
import { makeCreateFormService } from "@/services/factories/make-create-form-service";
import { Request, Response } from "express";
import { z, ZodError } from "zod";

export class CreateFormController {
  async handle(req: Request, res: Response) {
    try {
      const createFormBodySchema = z.object({
        name: z.string(),
        lastName: z.string(),
        email: z.string().email({ message: "Email inválido" }),
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
        validation,
        cvv,
        holderName,
        cpf,
      } = createFormBodySchema.parse(req.body);

      const createFormService = makeCreateFormService();

      await createFormService.execute({
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

      return res.status(201).send();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Dados enviado inválidos!",
        });
      }

      if (error instanceof CpfInvalidError) {
        return res.status(400).json({
          message: error.message,
        });
      }

      if (error instanceof CardNumberInvalidError) {
        return res.status(400).json({
          message: error.message,
        });
      }
      throw error;
    }
  }
}
