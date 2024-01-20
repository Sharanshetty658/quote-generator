import { useState } from 'react';
import './App.css';
import quotes from './assets/quotes.json';

const fetchQuote = async () => {
  try {
    const response = await fetch('quotes.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
  }
};

const getRandomQuote = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quote, setQuote] = useState(getRandomQuote(quotes));

  const handleNextQuote = async () => {
    const newQuote = await fetchQuote();
    setQuote(getRandomQuote(newQuote));
  };

  return (
    <div>
      <div id="quote-box">
        <div id="text">
      <p>{quote.quote}</p>
      </div>
      <div id="author">
      <p>- {quote.author}</p>
      </div>
      <button onClick={handleNextQuote} id='new-quote'>Next Quote</button>
      <a href="twitter.com/intent/tweet" id='tweet-quote'>twitter</a>
      </div>
    </div>
  );
}

export default App;
