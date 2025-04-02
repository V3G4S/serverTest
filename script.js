const http = require('http');
const {soma, subtrair, multiplicar, dividir} = require('./teste');
const PORT = 8000;
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8'); // Serve pra utilizar a tabela ASCII -8 
    // (que suporta caracteres especiais)
    const urlCapturada = url.parse(req.url, true)
    const {query, pathname} = urlCapturada
    let resultado = 0
    if (pathname == '/soma'){
        resultado = soma(Number(query.a), Number(query.b))
    }else if (pathname == '/subtrair'){
        resultado = subtrair(Number(query.a), Number(query.b))
    }else if (pathname == '/multiplicar'){
        resultado = multiplicar(Number(query.a), Number(query.b))
    }else if (pathname == '/dividir'){
        resultado = dividir(Number(query.a), Number(query.b))
    }else{
        res.statusCode = 404
        res.end('Página não encontrada')
    }
    res.end(`Resultado do cálculo: ${resultado}
        para trocar os valores, utilize o url do site (ex: localhost:8000/?a=10&b=20)`);
    });
    
    server.listen(PORT, () => {
    console.log(`Servidor inicializado em: http://localhost:8000/`);
});