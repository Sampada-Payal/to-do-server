
const http = require("http");

const port = 5500;

// server work req and reponse
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h6>Hey we got our server here...</h6>");
    res.end();
})
    // listen statement for that server should listen to that port number
    .listen(port, () => {
        console.log(`NodeJs server started running on port ${port}`);
    })

//http://localhost:5500

