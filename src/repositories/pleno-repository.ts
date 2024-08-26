import { Form } from "@/db/typeorm/entity/Form";

export interface PlenoRepository {
  createForm(data: Form): Promise<Form>;
  findAllForm(
    init: number,
    limit: number,
    data: Partial<Form>
  ): Promise<Form[] | null>;
}
