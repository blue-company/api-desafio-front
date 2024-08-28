import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { CreateListProductsService } from "../create-list-products-service";

export function makeCreateListProductsService() {
  const typeOrmPlenoRepository = new TypeOrmPlenoRepository();

  const createProductsService = new CreateListProductsService(
    typeOrmPlenoRepository
  );

  return createProductsService;
}
