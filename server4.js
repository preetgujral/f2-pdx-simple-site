var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//what is bodyparser doing? would help understand var searchResults =
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var f2search = require("./lib/f2search");

//what is it doing below? google app.post
app.post('/search', function (req, res) {
//look for corresponding parts in client side and f2search
  var searchResults = f2search(req.body.searchText);
  res.json(searchResults);
});

//this sends all lectures to /lectures. test by spinning up and going to this site. which i did and it returned an error - course is not defined
app.get('/lectures', function (req, res) {
  res.json(course.lectures);
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
