import { Post } from "@/db/typeorm/entity/Post";

export interface JuniorRepository {
  create(data: Post): Promise<Post>;
  update(id: number, data: Partial<Post>): Promise<Post | null>;
  findAll(init: number, limit: number): Promise<Post[] | null>;
  findOne(id: number): Promise<Post | null>;
  delete(id: number): Promise<Post | null>;
}
