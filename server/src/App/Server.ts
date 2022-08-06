import bodyParser from 'body-parser';
import express, { Express, Router } from 'express';
import { Server as ActiveServer } from 'http';
import { errorHandler } from './Errors/handler';
import NotFound from './Errors/NotFound';
import registerRoutes from './Routes';

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
        const router = Router();
        this.app.use(router);
        registerRoutes(router);
        this.app.all('*', () => {
            throw new NotFound();
        })
    }
}

