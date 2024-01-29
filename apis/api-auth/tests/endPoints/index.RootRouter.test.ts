const request = require('supertest');
import app from '../../src/app';
// import mongoose from "mongoose";
//
// jest.mock('mongoose');

describe('RootRouter', () => {

    test('GET /', async () => {
        // await jest.spyOn(mongoose, 'connect').mockImplementation(() => Promise.resolve(mongoose));
        const response = await request(app).get('/api').send();
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello World!' });
    });

});


