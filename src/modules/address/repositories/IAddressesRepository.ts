import { Address } from "../entities/Address";

interface IAddressesRepository {
  findAll(address: string): Promise<Address[]>;
}

export { IAddressesRepository };
