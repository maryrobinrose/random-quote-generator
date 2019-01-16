/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
var quotes = [
  {
    quote: "If you can't love yourself, how in the hell are you gonna love somebody else?"
    source: "RuPaul Charles"
    citation: "RuPaul's Drag Race"
  },
  {
    quote: "Stories have to be told or they die, and when they die, we can't remember who we are or why we're here."
    source: "Sue Monk Kidd"
    citation: "The Secret Life of Bees"
  },
  {
    quote: "I was set free, because my greatest fear had already been realized, and I was still alive..."
    source: "J.K. Rowling"
    citation: "Very Good Lives"
  },
  {
    quote: "The harder you push your brain to come up with something creative, the less creative your ideas will be."
    source: "Barbara Oakley"
    citation: "A Mind for Numbers"
  },
  {
    quote: "Now I think it’s one of the most useless questions an adult can ask a child—What do you want to be when you grow up? As if growing up is finite. As if at some point you become something and that’s the end."
    source:"Michelle Obama"
    citation: "Becoming"
  }
];

var colors = [
  {#D6DBDF},
  {#FAE5D3},
  {#FDEBD0},
  {#D0ECE7},
  {#D7BDE2}
];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * (quotes.length));
  var randomColor = Math.floor(Math.random() * color.length));
}

var randomQuote = "";
var randomColor = "";

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote() {


}

getRandomQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
