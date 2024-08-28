import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { DeletePostService } from "../delete-post-service";

export function makeDeletePostService() {
  const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
  const deletePostService = new DeletePostService(typeOrmJuniorRepository);

  return deletePostService;
}
