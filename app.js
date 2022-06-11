const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const http = require("http");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/', express.static(path.join(__dirname, '../client', 'build')));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

const server = http.createServer(app);

module.exports = server;
