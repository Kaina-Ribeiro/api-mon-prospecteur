import { Router } from "express";
import { FindAddressesController } from "../../../../modules/address/useCases/findAdresses/FindAddressesController";

const addressesRouters = Router();

const findAddressesController = new FindAddressesController();

addressesRouters.get("/:address", findAddressesController.handle);

export { addressesRouters };
