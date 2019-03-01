/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
I created a varable quote that is an array of objects
This is holding all of my quotes that I will be printing on the page
***/
let quotes = [
  {
    quote: "Do What You Can't",
    source: 'Casey Neistat',
    citation: 'YouTube',
    year: '2017'
  },
  {
    quote: 'Life Is Either Daring Adventure Or Nothing At All',
    source: 'Helen Keller',
    tag: 'wisdom'
  },
  {
    quote: 'Buy The Ticket Take The Ride',
    source: 'Hunter S. Thompson',
    tag: 'Adventurous'
  },
  {
    quote: 'You Only Live Once But If You Do It Right Once Is Enough',
    source: 'Mae West',
  },
  {
    quote: 'Above All, Try Something',
    source: 'Franklin D. Roosevelt',
  }
];

//console.log(quotes); testing to see if my array of objects actually works.

/***
This function is randomizing which quote is go to be printed.
***/
function getRandomQuote() {
  let random = Math.floor(Math.random() * (quotes.length));
  return quotes[random];
}
//console.log(getRandomQuote()); This was used to test my function to see if it will actually print in the console randomly the quotes I wrote in.


/***
Created another function that allows me to print a random quote from the last function.
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = '';
  html += '<p class="quote"> ' + randomQuote.quote + ' </p>';
  html += '<p class="source"> ' + randomQuote.source;
  if(randomQuote.citation){
    html += '<span class="citation"> ' + randomQuote.citation + ' </span>';
  }
  if(randomQuote.year){
    html += '<span class="year"> ' + randomQuote.year + ' </span>';
  }
  if(randomQuote.tag){
    html += '<span class="tag"> ' + randomQuote.tag + ' </span>';
  }
  html += '</p>';
  let quoteDiv = document.getElementById('quote-box');
  quoteDiv.innerHTML = html;
}


/***
This is calling to print out the random quotes.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
