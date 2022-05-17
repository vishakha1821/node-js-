const http = require('http');



 const server = http.createServer((req, res) => {
    console.log( req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>,y first Node JS page</head>');
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