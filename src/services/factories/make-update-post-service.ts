import { TypeOrmPlenoRepository } from "@/repositories/typeorm/typeorm-pleno-repository";
import { CreateFormService } from "../create-form-service";
import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { UpdatePostService } from "../update-post-service";

export function makeUpdatePostService() {
  const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
  const updateService = new UpdatePostService(typeOrmJuniorRepository);

  return updateService;
}
