import { ObjectID } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: ObjectID): Promise<User>;
}

export { IUsersRepository };
