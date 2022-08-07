import httpStatus from 'http-status';
import request from 'supertest';


it('responds with Not Found if resource does not exists', async () => {
    await request(global.server.getServer())
        .get('/asdsad')
        .send()
        .expect(httpStatus.NOT_FOUND);
});