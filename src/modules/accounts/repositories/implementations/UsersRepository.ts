import { ObjectID, Repository } from "typeorm";
import AppDataSource from "../../../../shared/infra/database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getMongoRepository(User);
  }

  async create({
    name,
    email,
    password,
    gender,
    scholarity,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      gender,
      scholarity,
    });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    return user;
  }

  async findById(_id: ObjectID): Promise<User> {
    const user = await this.repository.findOneBy({ _id });
    return user;
  }
}

export { UsersRepository };
