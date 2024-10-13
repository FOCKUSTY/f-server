import Config from "./config";
import App from "./app";

const token = new Config("KyEcGIkzRDXNlPMTxcM").authToken;

const main = async () => {
	try {
		new App(3002, token).listen();
	} catch (err) {
		console.error(err);
	}
};

main();