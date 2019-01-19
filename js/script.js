/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//Array of quotes
var quotes = [
  {
    quote: "She's gonna step outside, uncover her eyes, Who knew she could feel so alive",
    source: "Britney Spears",
    citation: "Brave New Girl",
    year: 2003
  },
  {
    quote: "My loneliness ain't killing me no more, I, I'm stronger",
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

//Generate a random number, use number to return random quote from array
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length); //Selects random quote
  return quotes[randomQuote]; //Returns random quote
};

//Calls getRandomQuote function
function printQuote() {
  var showQuote = getRandomQuote();
  var html = "<p class='quote'>" + showQuote.quote + "</p>";
  html += "<p class='source'>" + showQuote.source;

//Prints optional properities in quote array
  if ("citation" in showQuote) {
    html += "<span class='citation'>" + showQuote.citation + "</span>";
  }

  if ("year" in showQuote) {
    html += "<span class='year'>" + showQuote.year + "</span>" +"</p>";
  }

//Sets innerHTML of 'quote-box' div to the HTML string
  document.getElementById("quote-box").innerHTML = html;
}

//Runs printQuote function to print quotes to the page
printQuote();


//When the button is clicked, the event listener will call printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
