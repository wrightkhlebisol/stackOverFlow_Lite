let promise = require('bluebird');

let options = {
  // Initialization Options
  promiseLib: promise
};

let pgp = require('pg-promise')(options);
let connectionString = 'postgres://localhost:5432/questions';
let db = pgp(connectionString);

// add query functions

let getAllQuestions = (req, res, next) => {
    db.any('SELECT * FROM questions')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL questions'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

let getSingleQuestion = (req, res, next) => {
    var questionID = parseInt(req.params.id);
    db.one('select * from questions where id = $1', questionID)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ONE question'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  let createQuestion = (req, res, next) => {
    req.body.age = parseInt(req.body.age);
    db.none('insert into questions(question, ownerId, totalAnswers)' +
        'values(${question}, ${owner}, ${totAns})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one question'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  let updateQuestion = (req, res, next) => {
    db.none('update questions set question=$1, ownerId=$2, totalAnswers=$3 where id=$5',
      [req.body.question, req.body.owner, parseInt(req.body.totAns), parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated question'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  let removeQuestion = (req, res, next) => {
    var questionsID = parseInt(req.params.id);
    db.result('delete from questions where id = $1', questionID)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} question`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
    }  

module.exports = {
  getAllQuestions: getAllQuestions,
  getSingleQuestion: getSingleQuestion,
  createQuestion: createQuestion,
  updateQuestion: updateQuestion,
  removeQuestion: removeQuestion
};
