import { Module } from '@nestjs/common';

import DiscordController from './discord.controller';
import { ClientModule } from './client/client.module';

@Module({
    controllers: [DiscordController],
    imports: [ClientModule]
})
export class DiscordModule {};