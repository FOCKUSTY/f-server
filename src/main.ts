import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

class App {
    private _app: INestApplication<any>;

    constructor() {};

    private readonly init = async (): Promise<INestApplication<any>> => {
        this._app = await NestFactory.create(AppModule);

        return this._app;
    };

    public readonly listen = async (port: number|string = 3002) => {
        return await (await this.init()).listen(port);
    };

    get app(): INestApplication<any> {
        return this._app;
    };
};

export default App;