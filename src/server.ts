import { app } from "./app";
import "reflect-metadata";
import { appDataSource } from "./db/typeorm/data-source";
import { env } from "./env";

app.listen(
  {
    // host: "localhost",
    port: env.PORT,
  },
  async () => {
    await appDataSource
      .initialize()
      .then(async () => {
        console.log("Database connectado com sucesso!");

        return appDataSource.isInitialized;
      })
      .catch((error) => console.log(error));

    console.log(`🚀 HTTP Server is running! url: http://localhost:${env.PORT}`);
  }
);
