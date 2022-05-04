import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.MONGO_URL,
  entities:
    process.env.ENV === "prod"
      ? ["./dist/modules/**/entities/*.js"]
      : ["./src/modules/**/entities/*.ts"],
  synchronize: true,
});

export default AppDataSource;
