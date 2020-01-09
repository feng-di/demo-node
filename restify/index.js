const restify = require("restify")

function respond (req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer({name: "demo"});

server.pre(() => console.log("-- Call pre handler"));
// server.use((req, res, next) => {
//     console.log("-- Call use handler");
//     return next();
// });

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
    console.log("%s listening at %s", server.name, server.url);
});