export interface PlenoRepository {
  createForm(data: any): Promise<any>;
  findAllForm(init: number, limit: number): Promise<any>;
}
