module.exports = function() {
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

  var temp = [];
  var courseLectures = course.lectures;
  courseLectures.forEach(function (index, val){
    temp = temp.concat(index.notes);
    })
    // console.log(temp)
    randomIndex = Math.floor(Math.random()*temp.length)
    //randomIndexofArrayInTemp = Math.floor(Math.random()*temp[randomIndexofTemp])
    //randomNote = temp[randomIndexofNote][randomIndexofArrayInNote]
    // console.log(randomIndex)
  var output = temp[randomIndex]
  return output
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
  }

