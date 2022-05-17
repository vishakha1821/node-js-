const fs = require('fs');
const http = require('http');



 const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Send</button type="submit"></form></body>');
        res,write('/html');
        return res.end();

    }
    if(url==='/message' && method ==='POST'){
        const body = [];

        req.on('data', (chunk)=>{
            console.log(chunk);
        body.push(chunk);
        })
        req.on('end', ()=>{
            const parsedBody = Buffer.compare(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
 
            });
        });
        
        

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>,My first Node JS page</head>');
    res.write('<body><h1>Welcome to my first node JS Project</h1></body>');
    res.write('</html>');
    res.end();

    switch(req.url) {
        case "/home" :
            res.write('<h2>Welcme home</h2>');
            break;

        case "/about_us" :
            res.write('Welcome to about us');
            break;

    }

   
});

server.listen(4000); 