import { Router } from "express";

import discordRouter from './discord/index.route';

const router = Router();

router.use('/discord', discordRouter);

export default router;