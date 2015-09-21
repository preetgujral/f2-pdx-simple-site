// create event handler to pick up button click
$(function(){
  $("button").click(function() {
//request server to update the page
    var buttonClicked = $(this).attr("id");
    console.log (buttonClicked)
    $.get("http://localhost:3000/" + buttonClicked, function(response) {
      $("#" + buttonClicked + "text").html("Name: " + response.name + "<br>" + "Topic: " +response.topic);
    });
  });
})


//3. Changes the text of the div
    // ;
//4. send this information to a new page which holds random course info
    // app.get("/lectures", function (req, res) {
      // res.json(course.lectures[randomIndex]);
// });
//
// });


//removing temporarily to test below callback
// $(function() {
//   $("#lectures").click(function() {
//     $("#showLectures").text("This is a temporary string");
//   });
// });

//TODO: write a callback for the button click



// app.get("/preetgujral", function (req, res) {
//   var randomIndex = Math.floor(Math.random()*course.lectures.length);
//   res.json(course.lectures[randomIndex]);
// });





//TODO - write and register an event handler that pulls a random lab when lab button is clicked
//var labButton

// Everything before this is from the source file. I will be copying and pasting all new code above rather than space it out below.


// Example 1: getElementsByTagName()
//
// Vanilla JS Task:
//        Using JavaScript, add a descriptive page title.


//
// Example 2: getElementById()
//
// Vanilla JS Task:
//       Use getElementById to add a style attribute to the <ul>
//       that removes the bullets to the left of the images.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
//


// Alternate:
// picsUl.setAttribute("style", "list-style-type: none;");

//
// Example 3: querySelectorAll()
//
// Vanilla JS Task:
//       Make the images all have a maximum width of 200px.
//


//
// Example 4: querySelector() + createElement() + appendChild()
//
// Vanilla JS Task:
//       Find another picture to illustrate one of the labs.
//       Use JavaScript to add a new <li> element in your existing <ul>.
//       Then add a new <img> element to the <li> and specify its src.
//       You can use the URL of the image you found as the src,
//       or you can download the new image to your assets/img folder.
//
// You’ll need: document.createElement() and element.appendChild()
//


//
// Example 5: window.addEventListener("load")
//
// Vanilla JS Task:
//        Open an alert dialog on page load to welcome the user to the page.
//

//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// Vanilla JS Task:
//        Make the images half the window width each time the resize event triggers.
//
// You’ll need: window.innerWidth and window.innerHeight
//


//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.
//
// You'll need: $(window).on()
//              $(window).width()
//              $(element).height(desiredHeight)


//
// Example 7: Handling a click event
//
//            click = An event on a DOM element.
//            Signifies the user clicked that element with a mouse or trackpad.
//            Use it to interact with the user: open a menu,respond to a button-click, etc.
//
// Vanilla JS Task:
//        Every time an image is clicked, move it to the end of the <ul>.
//
// You’ll need: event.target.parentNode
//              element.remove()
//              element.appendChild()
//

//
// jQuery Task:
//        Repeat the previous task, this time using jQuery.

//
// jQuery Task:
//       Hide all the lab images on page load.
//       When a button is clicked, show the corresponding list item (and only that list item)
//
