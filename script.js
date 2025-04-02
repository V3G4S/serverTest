const express = require('express');
const {somar, subtrair, multiplicar, dividir} = require('./teste');

const server = express();
const PORT = 8000;

server.get('/somar', (req, res) => {
    let resultado = somar(req.query.a, req.query.b)
    res.send(`Resultado da soma: ${resultado}`);
})

server.get('/subtrair', (req, res) => {
    let resultado = subtrair(req.query.a, req.query.b)
    res.send(`Resultado da subtração: ${resultado}`);
})

server.get('/multiplicar', (req, res) => {
    let resultado = multiplicar(req.query.a, req.query.b)
    res.send(`Resultado da multiplicação: ${resultado}`);
})

server.get('/dividir', (req, res) => {
    let resultado = dividir(req.query.a, req.query.b)
    res.send(`Resultado da divisão: ${resultado}`);
})

server.listen(PORT, () => {
    console.log(`Servidor inicializado em: http://localhost:8000/`);
});