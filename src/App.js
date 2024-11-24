import React, { useState, useEffect } from 'react';
import { Quote } from "./components/Quote";

function App() {
  const [quote, setQuote] = useState({
    character: null,
    text: null,
    age: null
  });

  // Fetch Quote from API
  const fetchQuote = async () => {
    try {
      const res = await fetch('https://squid-game-api.vercel.app/api/random');
      const data = await res.json();
      return data; // Return Quote
    } catch (error) {
      console.error("Error fetching quote:", error);
      return { character: "Error", text: "Could not fetch quote.", age: "N/A" };
    }
  };

  // Call API when page loading
  useEffect(() => {
    const getQuote = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };
    getQuote();
  }, []);

  // Call API when click button
  const handleGenerateNewQuote = async () => {
    const newQuote = await fetchQuote();
    setQuote(newQuote);
  };

  return (
    <div className="App">
      {/* Show quote */}
      <Quote quote={quote} />
      <button onClick={handleGenerateNewQuote}>Generate new quote</button>
    </div>
  );
}

export default App;
