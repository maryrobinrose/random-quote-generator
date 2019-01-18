/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


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
    quote: "She's gonna step outside, uncover her eyes, Who knew she could feel so alive",
    source: "Britney Spears",
    citation: "Brave New Girl",
    year: 2003
  },
  {
    quote: "But now I'm stronger than yesterday, Now it’s nothing but my way, My loneliness ain't killing me no more, I, I'm stronger",
    source: "Britney Spears",
    citation: "Stronger",
    year: 2000
  },
  {
    quote: "Everyone has been doing emails.",
    source: "Britney Spears",
    year: 1999
  },
  {
    quote: "Now are you sure you want a piece of me?",
    source: "Britney Spears",
    citation: "Piece of Me",
    year: 2007
  },
  {
    quote: "Never, ever lose your passion to dream.",
    source: "Britney Spears",
  }
];



/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};



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
  var showQuote = getRandomQuote();
  var html = "<p class='quote'>" + showQuote.quote + "</p>";
  html += "<p class='source'>" + showQuote.source + "</p>";

  if ("citation" in showQuote) {
    html += "<span class='citation'>" + showQuote.citation + "</span>";
  }

  if ("year" in showQuote) {
    html += "<span class='year'>" + showQuote.year + "</span>";
  }

  document.getElementById("quote-box").innerHTML = html;
}

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
