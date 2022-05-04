import { Repository } from "typeorm";
import { Address } from "../../entities/Address";
import AppDataSource from "../../../../shared/infra/database";
import { IAddressesRepository } from "../IAddressesRepository";

class AddressesRepository implements IAddressesRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = AppDataSource.getMongoRepository(Address);
  }

  async findAll(address: string): Promise<Address[]> {
    const addresses = await this.repository.find({
      where: {
        address: new RegExp(`.*${address}.*`),
      },
    });

    return addresses;
  }
}

export { AddressesRepository };
