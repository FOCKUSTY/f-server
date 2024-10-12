import { Injectable } from '@nestjs/common';
import { Client } from 'discord.js';

import { DiscordService } from 'src/services/discord.service';

@Injectable()
class ClientService {
    public readonly getClient = (token: string): Client|undefined => {
        const service = new DiscordService();

        return service.token === token
            ? service.client
            : undefined;
    };
};

export default ClientService;