const fs = require('fs');
const http = require('http');
const url = require('url');



//SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=>{
    const pathName = req.url;
   
    if(pathName === '/' || pathName === '/overview'){
        res.end('overview 입니다.');
    } else if ( pathName === '/product') {
        res.end('product 입니다.');
    } else if ( pathName === '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data);
    } else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>Page not fount!</h1>');
    } 
});


server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening to requests");
})