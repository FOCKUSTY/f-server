import express, { Express, Router } from "express";

import routes from "./routes/index.route";
import Config from "./config";

class App {
	private readonly _app: Express;
	private readonly _paths: [string, Router][];

	protected readonly _port: string | number;

	public constructor(
		port: number | string,
		authToken: string,
		paths?: [string, Router][]
	) {
		new Config(authToken);

		this._app = express();

		this._port = port;
		this._paths = paths || [];

		this.init();
	};

	private readonly init = () => {
		try {
			this._app.use(express.json());
			this._app.use(express.urlencoded());

			for(const path of this._paths) {
				this._app.use(...path);
			};

			this._app.use("/api", routes);
		} catch (err) {
			console.log(err);
			return;
		};
	};

	public readonly listen = () => {
		try {
			this._app.listen(this._port, () =>
				console.log(`Запускаю на порте ${this._port}\nhttp://localhost:${this._port}`));
		} catch (err) {
			console.log(err);
			return;
		};
	};
};

export default App;