const request = require('supertest');
const app = require('../app');

describe('SpacecraftController', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should move the spacecraft forward', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "f", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: 1, z: 0 });
        expect(response.body.CurrentDirection).toBe('N');

    });

    it('should move the spacecraft backward', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "b", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: -1, z: 0 });
        expect(response.body.CurrentDirection).toBe('N');

    });

    it('should turn the spacecraft left', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "l", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('W');

    });
    it('should turn the spacecraft right', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "r", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('E');

    });

    it('should turn the spacecraft up', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "u", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('U');

    });
    it('should turn the spacecraft down', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "d", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: 0, z: 0 });
        expect(response.body.CurrentDirection).toBe('D');
    });
    it('Company given test case', async () => {
        const response = await request(app).post('/spacecraft/commands').send({ command: "f", position: { x: 0, y: 0, z: 0 }, direction: "N" });
        expect(response.body.Position).toEqual({ x: 0, y: 1, z: 0 });
        expect(response.body.CurrentDirection).toBe('N');
        const response1 = await request(app).post('/spacecraft/commands').send({ command: "r", position: response.body.Position, direction: response.body.CurrentDirection });
        expect(response1.body.Position).toEqual({ x: 0, y: 1, z: 0 });
        expect(response1.body.CurrentDirection).toBe('E');
        const response2 = await request(app).post('/spacecraft/commands').send({ command: "u", position: response1.body.Position, direction: response1.body.CurrentDirection });
        expect(response2.body.Position).toEqual({ x: 0, y: 1, z: 0 });
        expect(response2.body.CurrentDirection).toBe('U');
        const response3 = await request(app).post('/spacecraft/commands').send({ command: "b", position: response2.body.Position, direction: response2.body.CurrentDirection });
        expect(response3.body.Position).toEqual({ x: 0, y: 1, z: -1 });
        expect(response3.body.CurrentDirection).toBe('U');
        const response4 = await request(app).post('/spacecraft/commands').send({ command: "l", position: response3.body.Position, direction: response3.body.CurrentDirection });
        expect(response4.body.Position).toEqual({ x: 0, y: 1, z: -1 });
        expect(response4.body.CurrentDirection).toBe('W');

    });




});