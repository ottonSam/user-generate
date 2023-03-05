import { Router } from "express";

import { GenerateUserController } from "../controllers/GenerateUserController";

const generateRoutes = Router();

const generateUser = new GenerateUserController();

generateRoutes.post("/", generateUser.handle);

export { generateRoutes };
