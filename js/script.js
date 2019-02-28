/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
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
  },
  {
    quote: 'Buy The Ticket Take The Ride',
    source: 'Hunter S. Thompson',
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
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  let random = Math.floor(Math.random() * (quotes.length));
  return quotes[random];
}
//console.log(getRandomQuote()); This was used to test my function to see if it will actually print in the console randomly the quotes I wrote in.


/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = '';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source"> ' + randomQuote.source;
  if(randomQuote.citation){
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.year){
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';
  console.log(html);
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
