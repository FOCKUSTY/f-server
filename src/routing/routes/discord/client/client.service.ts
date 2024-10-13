import { Client } from 'discord.js';

import Discord from '../../../../services/discord.service';

class Service {
    public readonly getClient = (token: string): Client|undefined => {
        const service = new Discord();

        return service.token === token
            ? service.client
            : undefined;
    };
};

export default Service;