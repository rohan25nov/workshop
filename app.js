const http=require('http');
const fs=require('fs');
var port=3000;

fs.readFile('index.html',function (err,html) {
    var server=http.createServer(function (req,res) {
        res.write(html);
        res.end()
    });

    server.listen(port,'localhost',function () {
        console.log("Server Started at port "+port);
    })
})

