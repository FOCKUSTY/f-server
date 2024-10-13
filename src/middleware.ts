import { NextFunction, Request, Response } from "express";

import Config from "./config";

export const isAuthenticated = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authToken = new Config().authToken;

	console.log(
		`Request with method ${req.method} to ${req.url.replace(authToken, ":token")}`
	);

	const url = req.url.match(new RegExp(authToken, "gi"));
	const token = url ? url[0] : req.body.auth_token;

	const isAuth =
		token === authToken
			? next()
			: res.status(403).send({ msg: "Unauthorized" });

	return isAuth;
};