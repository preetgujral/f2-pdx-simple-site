
//could require

module.exports = function(searchText) {
  // console.log("Hello WOrld!");
  // return "Hello World!"+searchText;
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

//test what data is received

  var findPhrase = function (phrase) {
    //console.log(phrase) //this tests that server the data
    var results = {
      lectures: [],
      labs: []
    };

    var notes = [];
    //var notes2 = []
    var arrayOfSearches = phrase.split(",")
    //console.log(arrayOfSearches);
//TODO - return array either way. loop over each
//put next 3  lines  into loop
    for (i=0;i<arrayOfSearches.length;i++) {
      notes = notes.concat(searchCourseSection('lectures', arrayOfSearches[i]));
      notes = notes.concat(searchCourseSection('labs', arrayOfSearches[i]));
      //notes2[i] = notes
      //console.log("notes:" + notes2[i])
    }
    results =  { notes: notes};
    //console.log("results:" + results)
    // for (var key in results) {
    //   if (results.hasOwnProperty(key)) {
    //     var obj = results[key];
    //     for (var prop in obj) {
    //       if (obj.hasOwnProperty(prop)) {
    //         results+={notes: obj[prop]}
    //       }

    //     }
    //   }
    //   console.log("results: "+ [results])
      //console.log("results: " + results)
      // console.log(searchText)
      console.log(results.notes)
      console.log(results.notes.length)
      if (results.notes.length < 1) {
        return "nothing here"
      } else {
        return results
      };

    // }
  }

  var searchCourseSection = function (section, phrase) {
    var results = [],
        noteLc = '';

    for (var i = 0; i < course[section].length; i++) {
      if (course[section][i].notes && course[section][i].notes.constructor === Array) {
        for (var j = 0; j < course[section][i].notes.length; j++) {
          noteLc = course[section][i].notes[j].toLowerCase();
          if (noteLc.indexOf(phrase.toLowerCase()) >= 0) {
            var resultsObj = {
              note: course[section][i].notes[j],
              section: section,
              topic: course[section][i].topic
            };

            results.push(resultsObj.note);
          }
        }
      }
    }

    return results;
  }

  return findPhrase(searchText);
}; //module.exports

