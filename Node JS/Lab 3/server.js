// imports
var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('quotes.db');
var app = express();
var port = 3000;

// mounts BodyParser as middleware - every request passes through it
app.use(bodyParser.urlencoded({extended: true}));

var quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    }
];

// Routes
/*
app.get('/', function (req, res) {
    db.all('SELECT * FROM Quotes', function(err, rows) {
        if(err) {
            console.log("Error: " + err.message);
        }
        else {
            console.log("Retrieving all of the quotes.");
            for(let i=0; i < rows.length; i++) {
                console.log(rows[i].quote);
            }
            res.json(rows);
            db.close();
        }
    });
//  res.send("GET request received at /");
    
});
*/

app.get('/quotes', function(req, res){
    if(req.query.year){
        db.all('SELECT * FROM Quotes WHERE year = ?', [req.query.year], function(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                console.log("Return a list of quotes from the year: " + req.query.year);
                console.log(rows);
                res.json(rows);
            }
        });
    }
    else{
        db.all('SELECT * FROM Quotes', function processRows(err, rows){
            if(err){
                res.send(err.message);
            }
            else{
                for( var i = 0; i < rows.length; i++){
                    console.log(rows[i].quote);
                }
                res.json(rows);
            }
        });
    }
});

app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    db.get('SELECT * FROM Quotes WHERE rowid = ?', [req.params.id], function(err, row){
        if(err){
            console.log(err.message);
        }
        else{
            res.json(row);
        }
    });
});

app.post('/quotes', function(req, res){
    console.log("Insert a new quote: " + req.body.quote);
    db.run('INSERT INTO quotes VALUES (?, ?, ?)', [req.body.quote, req.body.author, req.body.year], function(err){
        if(err){
            console.log(err.message);
        }
        else{
            res.send('Inserted quote with id: ' + this.lastID);
        }
    });
});

app.listen(port, function () {
    console.log("Listening from port " + port);
});