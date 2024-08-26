import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "varchar" })
  lastName!: string;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  cel!: string;

  @Column({ type: "varchar" })
  cep!: string;

  @Column({ type: "varchar" })
  address!: string;

  @Column({ type: "varchar" })
  city!: string;

  @Column({ type: "varchar" })
  state!: string;

  @Column({ type: "varchar" })
  neighborhood!: string;

  @Column({ type: "int" })
  number!: number;

  @Column({ type: "varchar" })
  cardNumber!: string;

  @Column({ type: "varchar" })
  validation!: string;

  @Column({ type: "int" })
  cvv!: number;

  @Column({ type: "varchar" })
  holderName!: string;

  @Column({ type: "varchar" })
  cpf!: string;
}
