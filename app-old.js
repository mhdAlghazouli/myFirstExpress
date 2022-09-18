const http = require("http");

const hostname = '127.0.0.1';
const port = 3100;

const server = http.createServer((req,res) => {
  // const url = req.url;
  const { url } =req //destructuring
  console.log(`The url is : ${url}`);
  if(url === '/') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello world! welcome to my Node App!");
  }else if(url === '/favicon.ico'){
    res.statusCode = 200;
    res.end("");
  }
  else{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("this is not the home page");
  }

});

server.listen(port,hostname, () => {
  console.log(`Yo JOE! Comming in hot at http://${hostname}:${port}`);
});


