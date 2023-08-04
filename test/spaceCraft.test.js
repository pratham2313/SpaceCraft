const request = require('supertest');
const app = require('../app');

describe('SpacecraftController', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should move the spacecraft forward', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: 'f' });
        expect(response.body.Position).toEqual({ x: 0, y: 1, z: 0 });
        expect(response.body.CurrentDirection).toBe('N');

    });

    it('should move the spacecraft backward', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: 'b' });
        expect(response.body.Position).toEqual({ x: 0, y: -1, z: 0 });
        expect(response.body.CurrentDirection).toBe('N');

    });

    it('should turn the spacecraft left', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: 'l' });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('W');

    });
    it('should turn the spacecraft right', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: 'r' });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('E');

    });

    it('should turn the spacecraft up', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: 'u' });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('Up');

    });
    it('should turn the spacecraft down', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: 'd' });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('Down');
    });


});