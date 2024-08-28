import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "int" })
  price!: number;

  @Column({ type: "varchar" })
  photos!: string;

  @Column({ type: "date" })
  create_at!: Date;
}
