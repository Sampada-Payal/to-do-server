
const http = require("http");

const port = 5500;

const toDoList = ["hey everyone!", "hope you", "all are", "doing good :)"];

//creating a server using "http" protocol
http.createServer((req, res) => {
    // method : get, post, delete,...__ url : routes (eg: http://home/login is a route to reach login..)

    // callback functions
    const { method, url } = req;
    //console.log(method, url);    

    if (url === "/todos") {  //USED === AS IT ALSO CHECKS DATATYPE ALONG WITH ITS VALUE
        if (method === "GET"){
            console.log("todos route and its a GET method");
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(toDoList.toString());
        }
        else if (method === "POST") {
            let body = ""; //body is a empty variable
            req.on('error',(err) => {
                console.log(err);
            })
            .on('data', (chunk) => {
                body += chunk;
                // body = body + chunks
                console.log("chunk:", chunk );
            })
            .on('end', () => {
                    body = JSON.parse(body);
                    console.log("data:", body);
                    let newToDo = toDoList;
                    newToDo.push(body.item);  //PUSH : appending something at the end of that particular thing.
            });  
        }
        else if (method === "PUT") {
            
        }
        else if (method === "DELETE") {
            let body = "";
            req.on('error', (err) => {
                console.log(err);
            })
            .on('data', (chunk) => {
                body += chunk;
            })
            .on('end', () => {
                body = JSON.parse(body);
                let deleteThis = body.item;

                // Method 1
                /*for (let i = 0; i < toDoList.length; i++) {  //51.45
                    if (toDoList[i] === deleteThis) {
                        toDoList.splice(i, 1);
                        break;
                    }
                } */

                //METHOD 2
                toDoList.find((elem, index) => {
                    if (elem === deleteThis) {
                        toDoList.splice(index, 1);
                    }
                })

            })
        }
        else {
            res.writeHead(501);
        }
    }
    else if (url === "/") {
        console.log("/ home default route");
    }
    res.end();

})
    // listen statement for that server should listen to that port number
    .listen(port, () => {
        console.log(`NodeJs server started running on port ${port}`);
    })

//http://localhost:5500
//58 vid 1.8.2
