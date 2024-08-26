import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  author!: string;

  @Column({ type: "varchar" })
  title!: string;

  @Column({ type: "varchar" })
  description!: string;

  @Column({ type: "date" })
  create_at!: Date;
}
