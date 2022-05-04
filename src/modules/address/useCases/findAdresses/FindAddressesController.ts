import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAddressesUseCase } from "./FindAddressesUseCase";

class FindAddressesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { params } = req;
    const findAddressesUseCase = container.resolve(FindAddressesUseCase);

    const addresses = await findAddressesUseCase.execute(params.address);

    return res.json(addresses);
  }
}

export { FindAddressesController };
