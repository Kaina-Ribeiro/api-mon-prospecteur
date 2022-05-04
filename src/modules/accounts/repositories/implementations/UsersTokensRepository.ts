import { ObjectID, Repository } from "typeorm";
import { ObjectID as MongoObjectID } from "mongodb";
import AppDataSource from "../../../../shared/infra/database";
import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";
import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getMongoRepository(UserTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);
    return userToken;
  }

  async deleteById(_id: ObjectID): Promise<void> {
    await this.repository.delete({ _id });
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    const usersTokens = await this.repository.findOneBy({
      user_id: new MongoObjectID(user_id),
      refresh_token,
    });
    return usersTokens;
  }
}

export { UsersTokensRepository };
