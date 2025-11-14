// Key Concepts
// document.querySelector()
// addEventListener()
// Math Object()
// innerText

const btn = document.querySelector("button");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const newQuote = document.getElementById("newQuote");
const quotes = [
  {
    quote: "The only thing we have to fear is fear itself.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote: "I think, therefore I am.",
    person: "René Descartes",
  },
  {
    quote: "Fortune favors the brave.",
    person: "Virgil",
  },
  {
    quote: "It always seems impossible until it is done.",
    person: "Nelson Mandela",
  },
  {
    quote: "To know what is right and not do it is the worst cowardice.",
    person: "Confucius",
  },
  {
    quote: "The unexamined life is not worth living.",
    person: "Socrates",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    person: "Henry David Thoreau",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    person: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
];

let counter = 0;

newQuote.addEventListener("click", () => console.log("btn has been clicked"));
newQuote.addEventListener("click", changeQuote);

function changeQuote() {
  if (counter < 10) {
    let a = quote.textContent = quotes[counter].quote;
    let b = person.innerHTML = quotes[counter].person;
    console.log(b);
    counter++;
  } else {
    counter = 0;
  }
  console.log(counter);
}
