import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { FindAllProductsService } from "../find-all-products-service";

export function makeFindAllProductsService() {
  const typeOrmPlenoRepository = new TypeOrmPlenoRepository();
  const findAllProductsService = new FindAllProductsService(
    typeOrmPlenoRepository
  );

  return findAllProductsService;
}
