'use strict';

let express = require("express");
let app = express();
let routes = require('./routes');
let jsonParser = require("body-parser").json;
let logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());



var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;

















app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-WIth, Content-Type, Accept");
    if(req.method == "OPTIONS"){
        res.header("Acecess-Control-Allow-Methods", "PUT,POST,DELETE");
        return res.status(200).json({})
    }
    next(err);
});

app.use('/questions', routes);

// catch 404 and forward to handler
app.use((req, res, next)=>{
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

let port = process.env.PORT || 3000; 

app.listen(port, ()=>{
    console.log(`Express server is listening on port ${port}`);
});