// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/js_wallet'); // connect to our database
var Transaction = require('./models/transaction');

app.use("/", express.static('public')); //work with static files from puboic

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9999;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'js wallet api!' });   
});

// more routes for our API will happen here
router.route('/transactions')
	.post(function(req, res) {
        
        var transaction = new Transaction();      // create a new instance of the Bear model
        console.log(req.body);
        transaction.name = req.body.name;  // set the  name (comes from the request)
        transaction.description = req.body.description;  // set the  name (comes from the request)

        // save the transaction and check for errors
        transaction.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Transaction created!' });
        });
        
    })
    .get(function(req, res) {
        Transaction.find(function(err, transactions) {
            if (err)
                res.send(err);

            res.json(transactions);
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('JS Wallet server started on ' + port);
