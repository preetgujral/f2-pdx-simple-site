//this is where to put the client side http requests.

$(function () { //when page is loaded
//this will happen on get-info click
  // $('.get-info').click(function () {
  //   var section = $(this).attr('id');
  //   $.get("http://localhost:3000/" + section, function (response) {
  //     $("#show-" + section).text(response[0].topic);
  //   });
  // });
//this is where you put in what will happen on button click
  // Code Challenge 1:
  // When the user clicks the "Find It" button,
  // let's get back all the Lectures notes and display them.
  $('#search').on('submit', function(e) {
    e.preventDefault();

    var searchParam = $('input[name=searchText]').val();
    var lucky = $('input[name=lucky]').is(':checked');
    console.log(lucky)
    var data = {searchText: searchParam, lucky: lucky};
    var url = 'http://localhost:3000/search';

    console.log(data); // this will be a sanity check to see that we're getting the data

    $.post(url, data, function(response) {
      if (response === "nothing here") {
        $("#notfound").text("Search Not found")
      } else
    $("#notfound").text("");
      var lectures,
          output = '';

      // lectures = response.lectures;

      // for (var i = 0; i < lectures.length; i++) {
      //   if (lectures[i].notes && lectures[i].notes.constructor === Array) {
      //     for (var j = 0; j < lectures[i].notes.length; j++) {
      //       output += '<li>' + lectures[i].notes[j] + '</li>';
      //     }
      //   }
      // }

// would this be an appropriate place to put an if (output is blank) {return error) else
      if (response.notes && response.notes.constructor === Array) {
        for (var i = 0; i < response.notes.length; i++) {
          output += '<li>' + response.notes[i] + '</li>';
        }
      }

      output = '<ul>' + output + '</ul>';

      $("#search-results").html(output);
    });
  });

});

//on click, retrieve relevant fragment of JSON data. loop through that data and output
$(function(){
  $("button").click(function() {
    var buttonClicked = $(this).attr("id")
    console.log ("Button clicked on: " + buttonClicked);
    msg = "Results:"
    $.get("http://localhost:3000/" + buttonClicked, function(response) {
      if (buttonClicked === "getlucky") {
        msg = "<br>" + response;
        $("#" + "show-"+buttonClicked).html(msg);
      } else {
        $.each(response, function() {
          $.each(this, function(k, v) {
            msg += "<br>" + v
          });
        });
        $("#" + "show-"+buttonClicked).html(msg);
      };
    })
  })
})
