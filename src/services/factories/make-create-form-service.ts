import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { CreateFormService } from "../create-form-service";

export function makeCreateFormService() {
  const typeOrmPlenoRepository = new TypeOrmPlenoRepository();
  const createFormService = new CreateFormService(typeOrmPlenoRepository);

  return createFormService;
}
