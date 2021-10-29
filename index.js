const express = require("express");

var app = express();
var port = 80;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/");
});

app.listen(port, () => {
    console.log('\x1b[35m %s \x1b[0m', "\nExpress started.");
    var hostname = require('os').hostname();
    require('dns').lookup(hostname, function (err, add, fam) {
        console.log("Ip Link:", '\x1b[36m', 'http://'+ add + (port!=80? ":"+port: "") +"/",'\x1b[0m');
        console.log("Host Name Link:", '\x1b[36m', 'http://'+ hostname + (port!=80? ":"+port: "") +"/",'\x1b[0m');
        console.log("Localhost Link:", '\x1b[36m', 'http://localhost' + (port!=80? ":"+port: "") +"/",'\x1b[0m\n');
    });
});