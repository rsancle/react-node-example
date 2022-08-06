import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { errorHandler } from './Errors/handler';
import NotFound from './Errors/NotFound';

export class Server {
    private app: Express;
    private port: number;
    constructor() {
        this.app = express();
        this.port = 3000;
        this.addMiddlewares();
        this.addRoutes();
        this.app.use(errorHandler);
    }
    public start(): void {
        this.app.listen(this.port);
    }

    private addMiddlewares(): void {
        this.app.use(bodyParser.json());
    }

    private addRoutes(): void {
        this.app.use(bodyParser.json());
        this.app.all('*', () => {
            throw new NotFound();
        })
    }
}