import httpStatus from 'http-status';
import request from 'supertest';


it('user must be signed', async () => {
    await request(global.server.getServer())
        .post('/sign-up')
        .send()
        .expect(httpStatus.CREATED);
});