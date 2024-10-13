import { Request, Response, Router } from "express";
import { isAuthenticated } from "../middleware";

import route from "./routes/index.route";

import Config from "../config";

const router = Router();

setTimeout(() => {
	router.get("/", isAuthenticated, (_req: Request, res: Response) =>
		res.status(200).send({ msg: "Ok" }));
    
	router.get(
		"/" + Config.authToken,
		(_req: Request, res: Response) => res.status(200).send({ msg: "Ok" }));

	router.use("/v1/", isAuthenticated, route);
	router.use("/v1/" + Config.authToken, route);
}, 1_000);

export default router;