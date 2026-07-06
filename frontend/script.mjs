
const API_URL = "https://beko-quotes.trainees.hosting.cyf.academy";

async function fetchQuote() {
  const response = await fetch(API_URL);
  const quote = await response.text();
  document.getElementById("quote").textContent = quote;
}

document.getElementById("get-quote").addEventListener("click", fetchQuote);

fetchQuote();