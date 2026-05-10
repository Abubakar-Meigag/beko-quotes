import express from "express";
import cors from "cors";
import quotes from "./data/quotes-data.json" with { type: "json" };

const app = express();
const port = 3055;


app.use(cors());
app.use(express.json())

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  console.error("Received a request for a quote");
  const quote = pickRandomQuote();
  res.send(`"${quote.quote}" -${quote.author}`);
});

app.listen(port, () => {
  console.error(`Quote server listening on port ${port}`);
});