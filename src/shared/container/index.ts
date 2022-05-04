import "./providers";
import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { UsersTokensRepository } from "../../modules/accounts/repositories/implementations/UsersTokensRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/IUsersTokensRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UsersTokensRepository
);
