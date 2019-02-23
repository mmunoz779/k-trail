// Configure server constants
const port = 80;

// Configure express and routing
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var session = require('express-session');

var app = express();

var directoryArray = __dirname.split('\\');
var projectDirectory = "";

for (var i = 0; i < directoryArray.length - 1; i++) {
    projectDirectory += directoryArray[i] + '\\';
}

//View engine
app.set('views', path.join(projectDirectory, 'client\\views')); //sets directory for either windows or mac
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Configure static folder
app.use(express.static(path.join(projectDirectory, 'client')));
app.use(favicon(projectDirectory + "client/assets/favicon.ico"));

// Handle parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // body parse the JSON


app.use(session({
    secret: "keweenaw",
    saveUninitialized: true,
    resave: false,
    name: "gameState"
}));

// Handle routing
app.use(require('../routes'));

// Launch server
var server = app.listen(port, function () {
    console.log("Server is now online on port %s\n", port);
});

server.on('close', function () {
    console.log("Server closing...\n");
});

module.exports = server;
