import { TypeOrmJuniorRepository } from "@/repositories/typeorm/typeorm-junior-repository";
import { FindAllPostsService } from "../find-all-posts-service";

export function makeFindAllPostsService() {
  const typeOrmJuniorRepository = new TypeOrmJuniorRepository();
  const findAllPostsService = new FindAllPostsService(typeOrmJuniorRepository);

  return findAllPostsService;
}
