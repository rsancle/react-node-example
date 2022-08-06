import bodyParser from 'body-parser';
import express, { Express } from 'express';
import { Server as ActiveServer } from 'http';
import { errorHandler } from './Errors/handler';
import NotFound from './Errors/NotFound';

export class Server {
    private app: Express;
    private port: number;
    private server?: ActiveServer;

    constructor(port: number = 3000) {
        this.app = express();
        this.port = port;
        this.addMiddlewares();
        this.addRoutes();
        this.app.use(errorHandler);
    }
    public async start(): Promise<void> {
        this.server = await this.app.listen(this.port);
    }

    public stop(): void {
        this.server?.close();
    }

    public getServer(): ActiveServer | undefined {
        return this.server;
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