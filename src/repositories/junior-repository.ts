import { Post } from "@/db/typeorm/entity/Post";

export interface JuniorRepository {
  create(data: Post): Promise<Post>;
  update(
    profileGithub: string,
    id: number,
    data: Partial<Post>
  ): Promise<Post | null>;
  findAll(
    profileGithub: string,
    init: number,
    limit: number
  ): Promise<Post[] | null>;
  findOne(profileGithub: string, id: number): Promise<Post | null>;
  delete(id: number): Promise<Post | null>;
}
