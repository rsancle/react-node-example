import httpStatus from 'http-status';
import request from 'supertest';


it('user must be created', async () => {
    const user = {
        email: 'test@test.test',
        password: 'test'
    }
    await request(global.server.getServer())
        .post('/sign-up')
        .send(user)
        .expect(httpStatus.CREATED);
});