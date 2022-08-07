import { Server } from "../src/App/Server";

declare global {
    var server: Server;
}
global.server = new Server(5000);
beforeAll(async () => {
    global.server.start();
});

afterAll(async () => {
    global.server.stop();
});



