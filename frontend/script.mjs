
const API_URL = "http://localhost:3055";

async function fetchQuote() {
  const response = await fetch(API_URL);
  const quote = await response.text();
  document.getElementById("quote").textContent = quote;
}

document.getElementById("get-quote").addEventListener("click", fetchQuote);

fetchQuote();