function findPhrase(phrase) {
  var results = {
    lectures: [],
    labs: []
  };

  var notes = [];

  // for (var i = 0; i < course.lectures.length; i++) {
  //   // TODO: Use the same code we implemented on the front end to check
  //   //       that we have notes and that "notes" is an array.
  //   if (???????) {
  //     for (var j = 0; j < course.lectures[i].notes.length; j++) {
  //       // TODO: First, check whether this notes string contains our phrase.
  //       // Hint: A good string method is indexOf().
  //       if (course.lectures[i].notes[j].?????) {
  //         notes.push(course.lectures[i].notes[j]);
  //       }
  //     }
  //   }
  // }
  notes = searchCourseSection('lectures', phrase);
  notes.concat(searchCourseSection('labs', phrase));
  results =  { notes: notes };

  // TODO: We need to do the same thing for labs that we did for
  //       lectures. Can you convert the loop into a function
  //       that accepts 2 parameters: section and phrase,
  //       and lets us search either lectures or labs?

  // Delete these 2 lines
  // results.lectures = course.lectures;
  // results.labs = course.labs;

  return results;
}
