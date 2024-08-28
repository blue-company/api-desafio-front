import { Form } from "@/db/typeorm/entity/Form";
import { PlenoRepository } from "../pleno-repository";
import { appDataSource } from "@/db/typeorm/data-source";
import { Product } from "@/db/typeorm/entity/Product";
import { CreateFormServiceRequest } from "@/services/create-form-service";

export class TypeOrmPlenoRepository implements PlenoRepository {
  public items: CreateFormServiceRequest[] = [];
  private typeOrm = appDataSource.getRepository(Product);

  async createForm(
    data: CreateFormServiceRequest
  ): Promise<CreateFormServiceRequest> {
    this.items.push(data);
    return data;
  }

  async createProducts(data: Product): Promise<Product> {
    const response = this.typeOrm.create(data);

    return this.typeOrm.save(response);
  }

  async findAllProducts(
    init: number,
    limit: number,
    data: Partial<Product>
  ): Promise<Product[] | null> {
    return this.typeOrm.find({
      skip: init - 1,
      take: limit,
    });
  }
}
