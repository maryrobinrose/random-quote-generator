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
    year: 2003,
    tag: "#bravery"
  },
  {
    quote: "My loneliness ain't killing me no more, I, I'm stronger",
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
  }
];

//Array of colors
/*
var colors = [
  #FF69B4, // hot pink
  #FF7F50, // coral
  #FFA500, // orange
  #FFD700, // gold
  #FF4500 // orangered
];*/


//Generate a random number, use number to return random quote from array
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length); //Selects random quote
  return quotes[randomQuote]; //Returns random quote
};

//Calls getRandomQuote function
function printQuote() {
  var showQuote = getRandomQuote();
  var printToPage = "<p class='quote'>" + showQuote.quote + "</p>";
  printToPage += "<p class='source'>" + showQuote.source;

//Generates random number, use number to return random color from array
/*function getColors() {
  var randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

//Calls getColors function
function changeColor() {
  var newColor = getColors();
  var background =
}*/


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
}

//Runs printQuote function to print quotes to the page
printQuote();


//When the button is clicked, the event listener will call printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
