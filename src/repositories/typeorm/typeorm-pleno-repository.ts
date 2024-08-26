import { Form } from "@/db/typeorm/entity/Form";
import { PlenoRepository } from "../pleno-repository";
import { appDataSource } from "@/db/typeorm/data-source";

export class TypeOrmPlenoRepository implements PlenoRepository {
  private typeOrm = appDataSource.getRepository(Form);

  async createForm(data: Form): Promise<Form> {
    const response = this.typeOrm.create(data);

    return this.typeOrm.save(response);
  }

  async findAllForm(
    init: number,
    limit: number,
    data: Partial<Form>
  ): Promise<Form[] | null> {
    return this.typeOrm.find({
      skip: init - 1,
      take: limit,
    });
  }
}
