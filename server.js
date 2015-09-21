 var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//3000 is a common port for testing
//process is a default. PORT is a constant. essentially use default OR 3000

app.listen(port, function() {
  console.log('server started on port ' + port);
});

//slide 32
// var array = ['string1', 'string2', 'string3'];

// app.get("/preetgujral", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*array.length);
//   res.send(array[randomIndex]);
// });

//35 - send object data - when user hits /preetgujral they get a random lecture


var course = {
  'courseLevel': '201',
  'name': 'Foundations 2: JavaScript',
  'lectures': [
    {name: 'class1Lecture', topic: 'Paperwork, Setup & Javascript Basics (Part 1)'},
    {name: 'class2Lecture', topic: 'JavaScript Basics (Part 2) & Intro to Node'},
    {name: 'class3Lecture', topic: 'Array Methods, Functions & Scope/Hoisting'},
    {name: 'class4Lecture', topic: 'OOP in JavaScript and Classes/Inheritance'},
    {name: 'class5Lecture', topic: 'JavaScript in the Browser & Intro to jQuery'},
    {name: 'class6Lecture', topic: 'Building a Server & Using Ajax'},
    {name: 'class7Lecture', topic: 'Build & Deploy an App'},
    {name: 'class8Lecture', topic: 'Functional Programming with lodash'}
  ]
  ,
  'labs': [
    {name: 'class1Lab', topic: 'labtopic1'},
    {name: 'class2Lab', topic: 'labtopic2'},
    {name: 'class3Lab', topic: 'labtopic3'},
    {name: 'class4Lab', topic: 'labtopic4'},
    {name: 'class5Lab', topic: 'labtopic5'},
    {name: 'class6Lab', topic: 'labtopic6'},
    {name: 'class7Lab', topic: 'labtopic7'}
  ]
}


//40 - now send an index.html
app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.sendFile();
});

app.get("/lectures", function (req, res) {
  var randomIndex = Math.floor(Math.random()*course.lectures.length);
  res.json(course.lectures[randomIndex]);
});

app.get("/labs", function (req, res) {
  var randomIndex = Math.floor(Math.random()*course.labs.length);
  res.json(course.labs[randomIndex]);
});






// app.get("/f2coursework", function (req, res) {
//   res.send(course.courseLevel);
// });

//res has send method built in

// app.get("/quote", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*course.lectures.length);
//     res.send(course.lectures[randomIndex].name);
// });
