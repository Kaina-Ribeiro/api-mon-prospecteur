import { ObjectID } from "typeorm";
import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../entities/UserTokens";

interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens>;
  findByUserIdAndRefreshToken(
    user_id: ObjectID,
    refresh_token: string
  ): Promise<UserTokens>;
  deleteById(id: ObjectID): Promise<void>;
}

export { IUsersTokensRepository };