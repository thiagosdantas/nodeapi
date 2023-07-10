const express = require('express');
const server = express();

server.get('/', (req,res) => {
   return res.json({mensagem: 'API funcionando...'}) 
});

server.get('/user', (req,res) => {
    return res.json({mensagem: 'vigortech'}) 
 });

 server.get('/rota2', (req,res) => {
    return res.json({mensagem: 'mensagem2'}) 
 });

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...')
});