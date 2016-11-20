var splicedQueto = [];
var newQueto;
var randomQueto;
var quetos = [
  {name: "Mark Twain", Queto: "The secret of getting ahead is getting started."},
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

function getRandomQueto() {
  randomQueto = Math.floor(Math.random() * (quetos.length));
  splicedQueto = quetos.splice(randomQueto, 1)[0];
  return splicedQueto;
}

function printQueto() {
  newQueto = getRandomQueto();
  var html = "<p class='queto'>" + newQueto.Queto + "</p>";
  html += "<p class='name'>" + newQueto.name + "</p>";
  document.getElementById('quote-box').innerHTML = html;
}
