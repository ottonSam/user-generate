import { Router } from "express";

import { generateRoutes } from "./generate.routes";

const router = Router();

router.use("/generate", generateRoutes);

export { router };
