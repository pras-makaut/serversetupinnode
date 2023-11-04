const http=require('http');

const PORT = 3000;
//Using this createServer function we can actually create a basic http server using http module
//This function returns a server object, and takes a callback as argument.
// thsi callback created the server object not start the server.
const server = http.createServer(function listener(request,response){
    // this callback is a kind of listener function that is going to collect
    // every http request we will amke to our server.

    // Todo...  
    /**
     * request -> we will able to get the details of http request
     * response -> we will be able to configure what response we need to send for an incoming 
     *              https request
     */
    if(request.url == '/home'){
        console.log(request.method);
        // send response as json
        // response.setHeader("Content-Type", "application/json");
        // response.writeHead(200);
        // response.write(`{message1 : "first response"}`);
        // response.write(`{message2:"second response"}`);
        // response.end(`{message3:'welcome to home'}`);
        // send response as html
        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(`<html><body><h1>This is HTML</h1></body></html>`);
    }
    console.log("request recieved");
});

server.listen(PORT,function exec(){
    // once we succesfully boot up our server on given port,this callback will be executed.

    console.log(`server is up and running on port: ${PORT}`)
})