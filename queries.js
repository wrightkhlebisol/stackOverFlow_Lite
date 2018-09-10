let promise = require('bluebird');

let options = {
  // Initialization Options
  promiseLib: promise
};

let pgp = require('pg-promise')(options);
let connectionString = 'postgres://localhost:5432/questions';
let db = pgp(connectionString);

// add query functions

module.exports = {
  getAllQuestions: getAllQuestions,
  getSingleQuestion: getSingleQuestion,
  createQuestion: createQuestion,
  updateQuestion: updateQuestion,
  removeQuestion: removeQuestion
};