const http = require('http');
const fs = require("fs")

// this callback function runs whenever a request to the server made
const server = http.createServer((req, res) => {
    //   console.log('request made');
    console.log(req.url, req.method);

    // getting the path for routing
    let path = "./views/";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode=200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode=200;
            break;
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location","/about");
            res.end();
            break;
        default:
            path += "404.html"
            res.statusCode=404;
            break;
    }


    // set header content type
    res.setHeader("Content-type", "text/html") // can be text/plain

    // write the content, but is a bad way of doing it
    // res.write("<p>hello world</p>");
    // res.write("<p>hello again</p>");
    // end the response
    // res.end();

    // send an html file instead
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        } else {
            // res.write(data)
            res.end(data);
        }
    })

});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});