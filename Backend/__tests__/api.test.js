const request = require('supertest');
const app  = require('../server').app
const UserModel = require('../models/user/userModel');
const DateModel = require('../models/date/dateModel');


jest.setTimeout(100000)
describe('Application tests', () => {

    beforeAll((done) => {
      server = app.listen(1010, done); // Start the server and store the server instance
    });

    afterAll((done) => {
      server.close(done);
    });
    describe('Authentication tests', () => {
        let username = 'teuser';
        test('registration', async () => {
            const registrationResponse = await request(app)
                .post('/auth/register')
                .send({

                    username: username,
                    name: 'Test',
                    surname: 'User',
                    age: 25,
                    email: 'teuser@example.com',
                    nationality: 'Test',
                    gender: 'male',
                    password: 'tesassword',
                    confirmPassword: 'tesassword',
            
                });
            expect(registrationResponse.statusCode).toBe(200);
            await UserModel.findOneAndDelete({username: username});
        });
        test('login', async () => {
            let username = 'teuser';
            const registrationResponse = await request(app)
                .post('/auth/register')
                .send({
                    username: username,
                    name: 'Test',
                    surname: 'User',
                    age: 25,
                    email: 'teuser@example.com',
                    nationality: 'Test',
                    gender: 'male',
                    password: 'tesassword',
                    confirmPassword: 'tesassword',
            
                });
            const response = await request(app)
                .post('/auth/login')
                .send({
                    username: username,
                    password: 'tesassword'
                });
            expect(response.statusCode).toBe(200);
            expect(response.body.token).toBeDefined();
            await UserModel.findOneAndDelete({username: username});
        });
    });

    describe('Date tests', () => {
        test('dateCreation', async () => {
            let name = "first_date";
            const dateResponse = await request(app)
                .post('/date')
                .send({
                    name: name,
                    address: "Bayterek Astana", 
                    userId: "65ba9c445a03cb31974a4ded",
                    partnerId : "65c22ff7526b01d111be5cbc",
                    dateTime: "2022",
                    description: "Going on the first date"
                });
            expect(dateResponse.statusCode).toBe(201);
            await DateModel.findOneAndDelete({name: name});
        });
        
        test('dateAcceptance', async () => {
            let name = "first_date";
            const dateResponse = await request(app)
                .post('/date')
                .send({
                    name: name,
                    address: "Bayterek Astana", 
                    userId: "65ba9c445a03cb31974a4ded",
                    partnerId : "65c22ff7526b01d111be5cbc",
                    dateTime: "2022",
                    description: "Going on the first date"
                });
            const dateId = dateResponse.body._id;
            const acceptResponse = await request(app)
                .put(`/date/accept/${dateId}`)
                .send({});
            expect(acceptResponse.statusCode).toBe(200);
            await DateModel.findOneAndDelete({name: name});
        })

        test('dateDecline', async () => {
            let name = "first_date";
            const dateResponse = await request(app)
                .post('/date')
                .send({
                    name: name,
                    address: "Bayterek Astana", 
                    userId: "65ba9c445a03cb31974a4ded",
                    partnerId : "65c22ff7526b01d111be5cbc",
                    dateTime: "2022",
                    description: "Going on the first date"
                });
            const dateId = dateResponse.body._id;
            const declineResponse = await request(app)
                .put(`/date/decline/${dateId}`)
                .send({});
            expect(declineResponse.statusCode).toBe(200);
            await DateModel.findOneAndDelete({name: name});
        });
    });

    
});
