import express from 'express'
const routes = express.Router();

routes.post('/products', (request, response)=>{
    
    const body = request.body;
    console.log(body);
    
    return response.json(
        {
            nome: 'Marco Villa', 
            idade: 17
        });
});

module.exports = routes;