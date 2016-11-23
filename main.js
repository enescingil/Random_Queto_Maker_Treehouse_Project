var splicedQueto = [];
var viewedQueto = [];
var newQueto;
var randomQueto;
var quetos = [
  {name: "Mark Twain", Queto: "The secret of getting ahead is getting started.",},
  {name: "Mark Twain", Queto: "I can live for two months on a good compliment."},
  {name: "Mark Twain", Queto: "The lack of money is the root of all evil."},
  {name: "Mark Twain", Queto: "Get your facts first, then you can distort them as you please.",},
  {name: "Charles Bukowski", Queto: "Some people never go crazy. What truly horrible lives they must lead."},
  {name: "Charles Bukowski", Queto: "What matters most is how you walk through fire."},
  {name: "Charles Bukowski", Queto: "You have to die a few times before you can really live."},
  {name: "Karl Marx", Queto: "Religion is the opium of the masses."}, 
  {name: "Karl Marx", Queto: "Democracy is the road to socialism."}, 
  {name: "Karl Marx", Queto: "If anything is certain, it is that i myself am not a Marxist."}, 
  {name: "Lao Tzu", Queto: "Music in the soul can be heard by the universe."}, 
  {name: "Lao Tzu", Queto: "Knowing others is wisdom, knowing yourself is enlightment."}, 
  {name: "Lao Tzu", Queto: "When i let go of what i am, i become what i might be."}, 
  {name: "Plato", Queto: "The measuer of a man is what he does with power."}, 
  {name: "Plato", Queto: "He was a wise man who invented beer."}
];

/* Get a random Queto and push it to the another array, if quetos is empty repeat the process.*/
function getRandomQueto() {
  randomQueto = Math.floor(Math.random() * (quetos.length));
  splicedQueto = quetos.splice(randomQueto, 1)[0];
  viewedQueto.push(splicedQueto);
  if (quetos.length == 0) {
   quetos = viewedQueto;
   viewedQueto = [];
  }
  return splicedQueto;
}

/* Take the randomQueto and put(write) it to the quote-box in html */
function printQueto() {
  
  newQueto = getRandomQueto();
  var html = "<p class='queto'>" + newQueto.Queto + "</p>";
  html += "<p class='name'>" + newQueto.name + "</p>";
  document.getElementById('quote-box').innerHTML = html;
}

/* From the click of a button, choose a color from the array and put it to the css background color*/
$(function () {
  $(".button1").click(
    function changeColor () {
    var colors = ["red", "green", "blue", "gray", "pink", "AliceBlue", "aqua", "aquamarine", "azure",  "brown", "darkblue", "crimson", "darkgreen", "darkred", "dodgerblue", "gold", "linen", "mediumorchid", "midnightblue", "palegreen", "tomato", "teal", "yellogreen"];
    var randomNumber = Math.floor(Math.random() * colors.length);
    var color = colors[randomNumber];
      $("body").css("background-color", color);
    });
})();
