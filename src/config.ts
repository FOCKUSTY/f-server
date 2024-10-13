let gAuthToken: string;

class Config {
	private readonly _symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private readonly _regexp = new RegExp("[a-z]", "gi");
	private readonly _length = 24;

	private readonly _auth_token: string;

	public constructor(authToken?: string) {
		this._auth_token = this.checkToken(authToken || gAuthToken);

		gAuthToken = this._auth_token;
	};

	private readonly generateToken = (reason?: string) => {
		const length = Math.floor(
			Math.random() * (this._length / 1.5) +
				Math.floor(Math.random() * this._length));

		let token = "";

		for(let i = 0; i < length; i++) {
			const index = Math.floor(Math.random() * this._symbols.length);
			const symbol = this._symbols[index];

			token += symbol;
		};

		console.log("New token: " + token);

		if(reason)
            console.log("Reason: " + reason);

		return token;
	};

	public readonly checkToken = (token: string) => {
		if (!(token || gAuthToken)) return this.generateToken();

		if (
			token.length < this._length / 2 ||
			token.length > this._length * 1.5
		)
			return this.generateToken(
				token.length < this._length / 2
					? "Length less than " + this._length / 2
					: "Length more than " + this._length * 1.5,
			);

		for(const char of token) {
			if(!char.match(this._regexp))
				return this.generateToken("Your token has invalid characters");
		};

		return token;
	};

	public static get authToken(): string {
		return gAuthToken;
	};

	public get authToken(): string {
		return this._auth_token;
	};
};

export {
    gAuthToken as token
};

export default Config;