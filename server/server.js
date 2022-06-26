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
console.log('live!');

let history = [];
let sendArray = {};
sendArray = history

app.get('/math', function(req, res) {
    console.log('in get math');
    res.send(sendArray);
});

app.post('/math', (req, res) => {
    console.log('POST /math', req.body);

    let daEquation = {}
    
    daEquation.input1 = req.body.input1
    daEquation.input2 = req.body.input2


    if (req.body.operator == 'plus') {
        daEquation.total = parseInt(req.body.input1) + parseInt(req.body.input2);
        daEquation.operator = '+'
        history.push(daEquation)
    }

    if (req.body.operator == 'subtract') {
        daEquation.total = parseInt(req.body.input1) - parseInt(req.body.input2);
        daEquation.operator = '-'
        history.push(daEquation)
    }

    if (req.body.operator == 'multiply') {
        daEquation.total = parseInt(req.body.input1) * parseInt(req.body.input2);
        daEquation.operator = '*'
        history.push(daEquation)
    }

    if (req.body.operator == 'divide') {
        daEquation.total = parseInt(req.body.input1) / parseInt(req.body.input2);
        daEquation.operator = '/'
        history.push(daEquation)
    }

    console.log(sendArray);
    res.send('hey is working')
});


// server on port
app.listen(PORT, function() {
    console.log('SERVER RUNNING ON PORT', PORT)
});