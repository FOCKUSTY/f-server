import { Request, Response, Router } from "express";
import { isAuthenticated } from "../middleware";

import route from "./routers/index.router";

import Config from "../config";

const router = Router();

setTimeout(() => {
	router.get("/", isAuthenticated, (_req: Request, res: Response) =>
		res.status(200).send({ msg: "Ok" }));
    
	router.get(
		"/" + Config.authToken,
		isAuthenticated,
		(_req: Request, res: Response) => res.status(200).send({ msg: "Ok" }));

	router.use("/", isAuthenticated, route);
	router.use("/" + Config.authToken, isAuthenticated, route);
}, 1_000);

export default router;