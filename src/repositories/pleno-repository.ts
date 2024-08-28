import { Form } from "@/db/typeorm/entity/Form";
import { Product } from "@/db/typeorm/entity/Product";
import { CreateFormServiceRequest } from "@/services/create-form-service";

export interface PlenoRepository {
  createForm(data: CreateFormServiceRequest): Promise<CreateFormServiceRequest>;
  createProducts(data: Product): Promise<Product>;
  findAllProducts(
    init: number,
    limit: number,
    data: Partial<Product>
  ): Promise<Product[] | null>;
}
