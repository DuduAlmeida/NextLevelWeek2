import express from 'express';

const routes = express.Router();

routes.post('/users', (request, response) => {

    const users= [
        {name: 'DUDU', age: '19'},
        {name: 'CAETANO', age: '19'},
        {name: 'JAPA', age: '18'},
    ]

    return response.json(users);
});


export default routes;