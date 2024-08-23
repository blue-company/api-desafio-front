export interface JuniorRepository {
  create(data: any): Promise<any>;
  update(id: number, data: any): Promise<any>;
  findAll(init: number, limit: number): Promise<any>;
  findOne(id: number): Promise<any>;
  delete(id: number): Promise<any>;
}
