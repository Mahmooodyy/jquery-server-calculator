// imports
const express = require('express');
const bodyParser = require('body-parser');

// server
const app = express();
const PORT = 5000;

// static files
app.use(express.static('server/public'));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// code
console.log('live');
































// server on port
app.listen(PORT, function() {
    console.log('SERVER RUNNING ON PORT', PORT)
});