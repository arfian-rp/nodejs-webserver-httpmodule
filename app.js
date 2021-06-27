const http = require("http");
const fs = require("fs");
const port = 3000;

const htmlpage = (file, response) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      response.writeHead(404, {
        "Content-Type": "text/html",
      });
      response.write("<center><h3>ERROR 404</h3></center>");
    } else {
      response.write(data);
    }
    response.end();
  });
};

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = request.url;

    if (url === "/about") {
      htmlpage("./about.html", response);
    } else {
      //   response.write("<h1>test hello</h1>");
      htmlpage("./index.html", response);
    }
  })
  .listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
