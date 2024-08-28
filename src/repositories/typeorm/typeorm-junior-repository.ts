import { appDataSource } from "@/db/typeorm/data-source";
import { JuniorRepository } from "../junior-repository";
import { Post } from "@/db/typeorm/entity/Post";

export class TypeOrmJuniorRepository implements JuniorRepository {
  private typeOrm = appDataSource.getRepository(Post);

  async create(data: Post): Promise<Post> {
    const response = this.typeOrm.create(data);

    return this.typeOrm.save(response);
  }

  async update(
    profileGithub: string,
    id: number,
    data: Partial<Post>
  ): Promise<Post | null> {
    const post = await this.typeOrm.findOneBy({ id });

    if (!post) {
      return null;
    }

    Object.assign(post, data);
    return this.typeOrm.save(post);
  }

  async findAll(
    profileGithub: string,
    init: number,
    limit: number
  ): Promise<Post[] | null> {
    return this.typeOrm.find({
      skip: init - 1,
      take: limit,
      where: {
        profileGithub,
      },
    });
  }

  async findOne(profileGithub: string, id: number): Promise<Post | null> {
    return this.typeOrm.findOneBy({ id, profileGithub });
  }

  async delete(id: number): Promise<any> {
    const result = await this.typeOrm.delete(id);
    return result.affected !== 0;
  }
}
