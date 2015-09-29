var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

var f2search = require("./lib/f2search");

// console.log(f2search("Hi"));
app.post("/search", function(req, res) {
  var searchResults = f2search(req.body.searchText);
  res.json(searchResults);
});

app.get("/lectures", function(req, res) {
  res.json(course.lectures);
});

app.get("/labs", function(req, res) {
  res.json(course.labs);
});

var lablectbutton = require("./lib/lablectbutton");
app.get("/getlucky", function(req, res) {
  var output = lablectbutton(req.body.output);
  res.json(output);
});

app.get("/course_name", function(req, res) {
  res.json(course.name);
});

app.get("/", function(req, res) {
  res.sendFile();
});

app.listen(port, function() {
  console.log("server started on port " + port);
});

  var course = {
    level: 201,
    name: "Foundations 2: JavaScript",
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
      { "topic": "Object Oriented Programming",
        "notes": [ "OOP-blank note" ] },
      { "topic": "JavaScript in the Browser",
        "notes": [ "JSinB-blank note" ] },
      { "topic": "Node.js and Express",
        "notes": [ "node.js-blank note" ] },
      { "topic": "Workshop",
        "notes": [ "workshop-blank note" ] },
      { "topic": "lodash",
        "notes": [ "lodash-blank note" ] }
    ],
    labs: [
      { "topic": "Basics" },
      { "topic": "Object Oriented Programming" },
      { "topic": "Project" }
    ]
  };
