import { Router } from "express";
import { addressesRouters } from "./addresses.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/address", addressesRouters);
router.use(authenticateRoutes);

export { router };
