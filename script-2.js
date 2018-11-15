/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

//Hide the form and the description text and show the instruments once the form is submitted//

//1.When the form is submitted
// jQuery ("elementName").action();
$("form").submit(function(){
//2. Hide the form and the description
  $("section").hide();
//3. Show the instruments
  $("div").show();
//4. Stop the form from autorefreshing the page
  event.preventDefault();
});

// Play a sound each time a box is tapped

//1. Store the sounds we want to play
var chords = new Audio("chords.mp3");
var drums = new Audio("drums.mp3");
var groove = new Audio("groove.mp3");
var vocals = new Audio("vocals.mp3");
var wawa = new Audio("wawa.mp3");
var woop = new Audio("woop.mp3");
//2. Listen out for taps on a box

$("#chords").mousedown(function(){
  //3. Stop the sound
  chords.currentTime = 0;
  //4. Play the sound
  chords.play();
  // console.log("This works wahoo!");
});

$("#drums").mousedown(function(){
  drums.currentTime = 0;
  drums.play();
});

$("#groove").mousedown(function(){
  groove.currentTime = 0;
  groove.play();
});

$("#vocals").mousedown(function(){
  vocals.currentTime = 0;
  vocals.play();
});

$("#air").mousedown(function(){
  wawa.currentTime = 0;
  wawa.play();
});

$("#woop").mousedown(function(){
  woop.currentTime = 0;
  woop.play();
});