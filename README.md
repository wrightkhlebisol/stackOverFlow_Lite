# stackOverFlow_Lite 

# StackOverflow-lite API in node and postgre for asking and answering questions

# Introduction
This API gives developers access to the stackoverlow-lite question library, users can create, view, update and delete questions. They can also answer questions, vote-up and down-vote answers

# Overview
Its a fairly easy to use API, simply replace the url variables with the expected values. all edge cases have been handled

# Authentication
CORS is enabled by default so you can make requests from any origin, there's no authentication and no limit to requests

# Error Codes
Errors are well handled especially 500 and 404 errors

# Rate limit
Unlimited

# ```Example```

# Get all questions
GET /questions
/questions
curl --request GET \
  --url http:///questions

# Get a particular question with the ID
GET /questions/:qID
/questions/:qID
curl --request GET \
  --url http:///questions/:qID
  

# Get a particular question with the ID and all the answers for the question
GET /questions/:qID/answers
/questions/:qID/answers
curl --request GET \
  --url http:///questions/:qID/answers
  
# Get a particular answer for a question
GET /questions/:qID/answers/a:ID
/questions/:qID/answers/a:ID
curl --request GET \
  --url http:///questions/:qID/answers/a:ID
  
# Answer a particular question
POST /questions/:qID/answers/
/questions/:qID/answers/
curl --request POST \
  --url http:///questions/:qID/answers/
  
# Ask A Question
POST /questions
/questions
curl --request POST \
  --url http:///questions
  
# Upvote or Downvote answer where :intent is either up or down
POST /questions/:qID/answers/a:ID/vote-:intent
/questions/:qID/answers/a:ID/vote-:intent
curl --request POST \
  --url http:///questions/:qID/answers/a:ID/vote-:intent
  
# Update an Answer
PUT /questions/:qID/answers/a:ID
/questions/:qID/answers/a:ID
curl --request PUT \
  --url http:///questions/:qID/answers/a:ID
  
# Delete a particular Question
DELETE /questions/:qID
/questions/:qID
curl --request DELETE \
  --url http:///questions/:qID


