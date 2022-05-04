import { inject, injectable } from "tsyringe";
import { IAddressesRepository } from "../../repositories/IAddressesRepository";
import { Address } from "../../entities/Address";

@injectable()
class FindAddressesUseCase {
  constructor(
    @inject("AddressesRepository")
    private addressesRepository: IAddressesRepository
  ) {}

  async execute(address: string): Promise<Address[]> {
    const addresses = await this.addressesRepository.findAll(address);
    return addresses;
  }
}

export { FindAddressesUseCase };
