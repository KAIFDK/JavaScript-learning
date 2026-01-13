const http = require('http');

const myServer = http.createServer((req,res) => {
    console.log('new req');
    res.end("Hello From servers");
    
})

myServer.listen(8000, () => (console.log("Server Started")));