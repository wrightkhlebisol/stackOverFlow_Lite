DROP DATABASE IF EXISTS stackOverFlow_Lite;
CREATE DATABASE stackOverFlow_Lite;

\c stackOverFlow_Lite;

CREATE TABLE questions (
  ID SERIAL PRIMARY KEY,
  question VARCHAR,
  ownerId VARCHAR,
  totalAnswers INTEGER
);

INSERT INTO questions (question, ownerId, totalAnswers)
  VALUES ('Where does the sun rise from', '12', 3);