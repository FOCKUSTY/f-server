import { Module } from '@nestjs/common';

import Contoller from './client.controller';
import Service from './client.service';

@Module({
    controllers: [Contoller],
    providers: [Service],
    exports: [Service]
})
export class ClientModule {};