import { Router } from "express";
import Controller from "./client.controller";

const router = Router();
const controller = new Controller();

router.get('/', controller.getClient);

export default router;