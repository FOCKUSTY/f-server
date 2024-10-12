import { Controller, Get, Param } from '@nestjs/common';
import { Client } from 'discord.js';

import Service from './client.service';

@Controller('discord/client')
class ClientController {
    constructor(private readonly service: Service) {};

    @Get(':token')
    public getClient(@Param() params: {token: string}): Client|undefined {
        return this.service.getClient(params.token);
    };
};

export default ClientController;