const quotes = [
{
    quote : "Emotions eventually fade away, and only results remain.",
    author : "An Unknown Author",
},
{
    quote: "The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
},
{
    quote : "Some things have to be believed to be seen.",
    author : "Ralph Hodgson",
},
{
    quote : "Mistakes are the portals of discovery.",
    author : "James Joyce",
},
{
    quote : "I hope the leaving is joyful, and I hope never to return.",
    author : "Frida Kahlo",
},
{
    quote : "Sometimes even to live is an act of courage.",
    author : "Seneca",
},
{
    quote : "Nothing can be done without hope and confidence.",
    author : "Helen Keller",
},
{
    quote : "If you're never scared or embarrassed or hurt, it means you never take any chances.",
    author : "Julia Sorel",
},

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;