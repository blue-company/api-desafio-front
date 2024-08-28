import { env } from "@/env";
import { DataSource } from "typeorm";
import { Post } from "./entity/Post";
import { Form } from "./entity/Form";
import { Product } from "./entity/Product";

export const appDataSource = new DataSource({
  type: "mysql",
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Post, Product],
  subscribers: [],
  migrations: [],
});
