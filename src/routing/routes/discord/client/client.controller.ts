import { Request, Response } from "express";
import { Client } from "discord.js";

import Service from "./client.service";
import Discord from "../../../../services/discord.service";

const service = new Service();

class Controller {
    public getClient(_req: Request, res: Response) {
        const client: Client|undefined = service.getClient(new Discord().token);

        return client
            ? res.status(200).send({client})
            : res.status(403).send({msg: 'Client is not defined, try later'});
    };
};

export default Controller;