var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//what is bodyparser doing? would help understand var searchResults =
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var f2search = require("./lib/f2search");

app.post('/search', function (req, res) {
  var searchResults = f2search(req.body.searchText);
  res.json(searchResults);
});

//this sends all lectures to /lectures. test by spinning up and going to this site. which i did and it returned an error - course is not defined

app.get('/lectures', function (req, res) {
  res.json(course.lectures)
});

app.get('/labs', function (req, res) {
  res.json(course.labs);
});

app.get('/course_name', function (req, res) {
  res.json(course.name);
});

app.get('/', function (req, res) {
  res.sendFile();
});

app.listen(port, function () {
  console.log('server started on port ' + port);
});
//this is the code from server.js
//remember that you just copied this from github.com, so do not copy paste anything from here
//remember to comment out in order to test

// app.get("/lectures", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*course.lectures.length);
//   res.json(course.lectures[randomIndex]);
// });

// app.get("/labs", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*course.labs.length);
//   res.json(course.labs[randomIndex]);
// });

var course = {
    level: 201,
    name: 'Foundations 2: JavaScript',
    lectures: [
      { "topic": "Intro, Basics 1",
        "notes": [ "The primitive data types are Boolean, Null, Undefined, Number, and String.",
                   "Parameters become variables inside their function.",
                   "A method is a function that is also the value of an object property."
                 ]
      },
      { "topic": "Basics 2",
        "notes": [ "Logical operators return the result of the last expression evaluated.",
                   "Loops execute the same instructions multiple times.",
                   "An infinite loop is a loop that never satisfies its exit condition."
                 ]
      },
      { "topic": "Array Methods, Functions, Scope",
        "notes": [ "join() takes a delimiter, returns a string.",
                   "Generally useful code is often packaged up as a collection of functions and data in libraries.",
                   "JavaScript is function-scoped."
                 ] },
      { "topic": "Object Oriented Programming" },
      { "topic": "JavaScript in the Browser" },
      { "topic": "Node.js and Express" },
      { "topic": "Workshop" },
      { "topic": "lodash" }
    ],
    labs: [
      { "topic": "Basics" },
      { "topic": "Object Oriented Programming"},
      { "topic": "Project"}
    ]
  };
