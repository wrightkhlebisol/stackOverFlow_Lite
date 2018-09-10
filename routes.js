'use strict';

let express = require('express');
let router = express.Router();


// GET /questions
router.get("/", (req, res)=>{
    // Return all the questions
    res.json({response: "You sent me a GET request"})
});

// POST /questions
router.post("/", (req, res)=>{
    // Route for creating questions
    res.json({
        response: "You sent me a POST request",
        body: req.body
    });
});

// GET /questions/:qID
router.get("/:qID", (req, res)=>{
    // Return specific questions
    res.json({
        response: `You sent me a GET request for ID ${req.params.qID}`
    })
});

// POST /questions/:qID/answers
router.post("/:qID/answers", (req, res)=>{
    // Route for creating answers
    res.json({
        response: "You sent me a POST request to /answers",
        questionId: req.params.qID,
        body: req.body
    });
});

// PUT /questions/:qID/answers/:aID
router.put("/:qID/answers/:aID", (req, res)=>{
    // Edit a specific answer
    res.json({
        response: "You sent me a PUT request to /answers",
        questionId: req.params.qID,
        answerId: req.params.aID,
        body: req.body
    });
});

// POST /questions/:qID/answers/:aID/vote-:int
router.post("/:qID/answers/:aID/vote-:int", 
(req, res, next)=>{
    if(req.params.int.search(/^(up|down)$/) === -1){
        let err = new Error("Not Found");
        err.status = 404;
        next(err);
    }else{
        next();
    }
}, (req, res)=>{
    // Vote a specific answer up or down
    res.json({
        response: `You sent me a POST request to /vote-${req.params.int}`,
        questionId: req.params.qID,
        intent: req.params.int,
        answerId: req.params.aID
    });
});

// DELETE /questions/:qID/answers/:aID
router.delete("/:qID/answers/:aID", (req, res)=>{
    // Vote a specific answer up or down
    res.json({
        response: `You sent me a DELETE request to /answers`,
        questionId: req.params.qID,
        answerId: req.params.aID
    });
});

module.exports = router; 