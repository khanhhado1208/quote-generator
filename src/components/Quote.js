import React from 'react';

export const Quote = ({ quote }) => {
  return (
    <div className='quote'>
      <div className='character' title={quote.character}>
        {quote.character || "Unknown Character"}
      </div>
      <blockquote>
        {quote.text || "No quote available."}
      </blockquote>
      <div className='age' title={quote.age}>
        {quote.age ? `Age: ${quote.age}` : "Age: N/A"}
      </div>
    </div>
  );
};
