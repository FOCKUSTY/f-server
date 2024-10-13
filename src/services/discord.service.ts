import { Client } from "discord.js";

let gClient: Client;
let gToken: string;

class Discord {
    private readonly _client: Client;
    private readonly _token: string;

    public constructor(token?: string, client?: Client) {
        this._client = client || gClient;
        this._token = token || gToken;

        gClient = this._client;
        gToken = this._token;
    };

    public get token(): string {
        return this._token;
    };

    public get client(): Client {
        return this._client;
    };
};

export default Discord;