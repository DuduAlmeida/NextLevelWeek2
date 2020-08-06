import express from 'express';

const app = express();
app.use(express.json());    //Introduz um plugin para utlizarmos o JSON nas requisições

//GET:      Buscar ou listar uma informação
//POST:     Criar alguma nova informação
//PUT:      Atualizar uma informação existente
//DELETE:   Deletar uma informação existente       

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

// O que acontece com o "GET" no recurso '/users':
app.get('/users', (request, response) => {
    //request: vem o cabeçalho e o corpo do protocolo.
    //response: resposta da API para o front-end   
        
    console.log(request.query);    //Query params

    const users= [
        {name: 'DUDU', age: '19'},
        {name: 'CAETANO', age: '19'},
        {name: 'JAPA', age: '18'},
    ]

    return response.json(users);
});

app.post('/users', (request, response) => {

    console.log(request.body);        

    const users= [
        {name: 'DUDU', age: '19'},
        {name: 'CAETANO', age: '19'},
        {name: 'JAPA', age: '18'},
    ]

    return response.json(users);
});

app.delete('/users/:id', (request, response) => {
    //Avisa que deve vir um parâmetro de rota na requisição da url, nesse caso é o id

    console.log(request.params);    //Route params        

    const users= [
        {name: 'DUDU', age: '19'},
        {name: 'CAETANO', age: '19'},
        {name: 'JAPA', age: '18'},
    ]

    return response.json(users);
});

//Ordem da porta que vai executar:  localhost:3333
app.listen(3333);