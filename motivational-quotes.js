// motivational-quotes.js
const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don't watch the clock; do what it does. Keep going.",
  "Everything you can imagine is real.",
  "Start where you are. Use what you have. Do what you can."
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`💡 Motivation: "${quote}"`);
}

showRandomQuote();
