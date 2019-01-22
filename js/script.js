/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//This project is expected to earn an Exceeds Expectations grade

//Array of quotes
var quotes = [
  {
    quote: "She's gonna step outside, uncover her eyes / Who knew she could feel so alive",
    source: "Britney Spears",
    citation: "Brave New Girl",
    year: 2003,
    tag: "#bravery"
  },
  {
    quote: "My loneliness ain't killing me no more / I, I'm stronger",
    source: "Britney Spears",
    citation: "Stronger",
    year: 2000,
    tag: "#strength"
  },
  {
    quote: "Everyone has been doing emails.",
    source: "Britney Spears",
    year: 1999,
    tag: "#tech"
  },
  {
    quote: "Now are you sure you want a piece of me?",
    source: "Britney Spears",
    citation: "Piece of Me",
    year: 2007,
    tag: "#guts"
  },
  {
    quote: "Never, ever lose your passion to dream.",
    source: "Britney Spears",
    tag: "#passion"
  },
  {
    quote: "Don't treat me like a little girl.",
    source: "Britney Spears",
    tag: "#woman"
  }
];

//Array of colors
var colors = [
  "#FFD700", // gold
  "#FFC922", // sunset yellow
  "#FF7F50", // coral
  "#FD5E53", // sunset orange
  "#FFA500", // orange
  "#FF4500", // orangered
  "#FF69B4", // hot pink
  "#FF1493", // deep pink
  "#BC177D", // deep magenta
  "#971d78" // dark magenta
];

//Generates a random number, uses that number to return random quote from array
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};

//Generates a random number, uses that number to return a random color from array
function getColor() {
  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};

//Calls getRandomQuote and getColor functions
function printQuote() {
  var showColor = getColor();
  var showQuote = getRandomQuote();
  var printToPage = "<p class='quote'>" + showQuote.quote + "</p>";
  printToPage += "<p class='source'>" + showQuote.source;

//Prints optional properities in quote array
  if ("citation" in showQuote) {
    printToPage += "<span class='citation'>" + showQuote.citation + "</span>";
  }

  if ("year" in showQuote) {
    printToPage += "<span class='year'>" + showQuote.year + "</span>";
  }

  if ("tag" in showQuote) {
    printToPage += "<span class='tag'>" + showQuote.tag + "</span>" + "</p>";
  }

//Sets innerHTML of 'quote-box' div to string
  document.getElementById("quote-box").innerHTML = printToPage;

//Changes background color
  document.body.style.background = showColor;
}

//Runs printQuote function to print quotes to the page
printQuote();

//Automatically changes the quote and color after five seconds
var quoteTimer = setInterval(printQuote, 5000);


//When the button is clicked, the event listener will call printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
