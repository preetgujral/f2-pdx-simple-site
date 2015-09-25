var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var f2search = require("./lib/f2search");
// console.log(f2search("Hi"));
app.post('/search', function (req, res) {
 //if im feeling lucky box is checked
  //console.log(typeof req.body.lucky)
  //console.log (req.body.lucky)//if (gettingLucky==="true") {
  //  console.log("this validates that it registered as true");//select a random entry from the "notes" options and display it immediately.
  if (req.body.lucky==="true") {
    return "unselect I feel lucky box"
  }

  //TODO - else if (no results were found) {return an informative message to the user}
  else {
//   return search results
    var searchResults = f2search(req.body.searchText);
    //console.log(searchResults)
    res.json(searchResults);
  //}
  }
});


app.get('/lectures', function (req, res) {
  res.json(course.lectures)
});

app.get('/labs', function (req, res) {
  res.json(course.labs);
});

app.get('/getlucky', function (req, res) {
//this is where you get a random note and res.json it
  //res.json(["string1","string2","string3"])

  var temp = []
  var courseLectures = course.lectures
  courseLectures.forEach(function (index, val){
    temp = temp.concat(index.notes);
    })
    console.log(temp)
    randomIndex = Math.floor(Math.random()*temp.length)
    //randomIndexofArrayInTemp = Math.floor(Math.random()*temp[randomIndexofTemp])
    //randomNote = temp[randomIndexofNote][randomIndexofArrayInNote]
    console.log(randomIndex)
  res.json(temp[randomIndex])
    //console.log("indexoftemp" + randomIndexofTemp)
    //= (array) {
      //Math.floor(Math.random()*array.length)
      // }
    //randomNote = randomIndex(randomIndex(temp));
    //console.log(randomNote)

    //temp.forEach( function (index){
      //console.log(temp[index])
    //  lucky+=temp[index]

  //console.log(lucky)
  })
  //var randomIndex = Math.floor(Math.random()*lucky.length);

//});

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
      { "topic": "Object Oriented Programming",
        "notes": [ "OOP-blank note"]},
      { "topic": "JavaScript in the Browser",
        "notes": [ "JSinB-blank note"]},
      { "topic": "Node.js and Express",
        "notes": [ "node.js-blank note"]},
      { "topic": "Workshop",
        "notes": ["workshop-blank note"]},
      { "topic": "lodash",
        "notes": [ "lodash-blank note"]}
    ],
    labs: [
      { "topic": "Basics" },
      { "topic": "Object Oriented Programming"},
      { "topic": "Project"}
    ]
  };


//1st route - duplicate data in both modules
//2nd - what i did
