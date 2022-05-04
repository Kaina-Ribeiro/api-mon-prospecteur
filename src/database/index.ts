import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGO_URL,
  entities: ["./src/modules/**/entities/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export { AppDataSource };
