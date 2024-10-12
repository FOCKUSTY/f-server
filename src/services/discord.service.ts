import { Client } from "discord.js";

let gClient: Client;
let gToken: string;

class DiscordService {
    private readonly _client: Client;
    private readonly _token: string;

    public constructor(client?: Client, token?: string) {
        this._client = client || gClient;
        this._token = token || gToken;

        this.init();
    };

    private readonly init = () => {
        gClient = this._client;
        gToken = this._token;
    };

    public get token(): string {
        return this._token;
    }

    public get client(): Client {
        return this._client;
    };
};

export {
    DiscordService
};