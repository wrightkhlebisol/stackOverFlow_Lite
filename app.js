'use strict';

let express = require("express");
let app = express();
let routes = require('./routes');
let jsonParser = require("body-parser").json;
let logger = require("morgan");
let router = express.Router();
let db = require('./queries');

app.use(logger("dev"));
app.use(jsonParser());

router.get('/api/v1/questions', db.getAllQuestions);
router.get('/api/v1/questions/:id', db.getSingleQuestion);
router.post('/api/v1/questions', db.createQuestion);
router.put('/api/v1/questions/:id', db.updateQuestion);
router.delete('/api/v1/questions/:id', db.removeQuestion);

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
    let err = new Error("Not Found");
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

module.exports = router;