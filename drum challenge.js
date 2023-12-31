// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

$(document).ready(function () {
  $("button").click(function () {
    var clicked = $(this).attr("id");

    var o = $("#" + clicked)
      .find("audio")
      .attr("id");
    //var music = $("#" + o).attr("src");
    var name = $("#" + o).attr("name");
    document.getElementById(o).play();
    document.getElementById("display").innerText = name;
    //var audioC = clicked.querySelector('audio');
    console.log(name);
  });
});

$(document).keypress(function (event) {
  var key = event.keyCode ? event.keyCode : event.which;
  var pressedKey = String.fromCharCode(key);

  pressedKey = pressedKey.toUpperCase();
  // console.log("You pressed key : " + pressedKey);
  var button = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  var pk = button.find((element) => element === pressedKey);
  if (pk != null) {
    var name = $("#" + pk).attr("name");
    document.getElementById("display").innerText = name;
    document.getElementById(pk).play();
  }
});
