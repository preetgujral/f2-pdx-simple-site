var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//3000 is a common port for testing
//process is a default. PORT is a constant. essentially use default OR 3000

app.listen(port, function() {
  console.log('server started on port ' + port);
});

var course = {
  'courseLevel': '201',
  'name': 'Foundations 2: JavaScript',
  'lectures': [
    {name: 'class1Lecture'},
    {name: 'class2Lecture'},
    {name: 'class3Lecture'},
    {name: 'class4Lecture'},
    {name: 'class5Lecture'},
    {name: 'class6Lecture'},
    {name: 'class7Lecture'},
  ]
  // ,
  // 'labs': [{
  //   name: 'class1Lab', topic: ''},
  //   name: 'class2Lab', topic: ''},
  //   name: 'class3Lab', topic: ''},
  //   name: 'class4Lab', topic: ''},
  //   name: 'class5Lab', topic: ''},
  //   name: 'class6Lab', topic: ''},
  //   name: 'class7Lab', topic: ''}
  // } ]
}

app.get("/f2coursework", function (req, res) {
  res.send(course.courseLevel);
});

//res has send method built in

app.get("/quote", function (req, res) {
  var randomIndex = Math.floor(Math.random()*course.lectures.length);
    res.send(course.lectures[randomIndex].name);
});
