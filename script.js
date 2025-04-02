const http = require('http');
const {soma} = require('./teste');
const PORT = 8000;
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Serve pra utilizar a tabela ASCII -8 
    // (que suporta caracteres especiais)
    const urlCapturada = url.parse(req.url, true)
    const {query} = urlCapturada
    let resultado = soma(Number(query.a), Number(query.b))
    res.end(`Resultado da soma: ${resultado}
        para trocar os valores, utilize o url do site (ex: localhost:8000/?a=10&b=20)`);
    });
    
    server.listen(PORT, () => {
    console.log(`Servidor inicializado em: http://localhost:8000/`);
});