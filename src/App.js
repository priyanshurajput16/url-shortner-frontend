import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const res = await axios.post('http://localhost:5000/shorten', {
        originalUrl
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error('Error shortening URL:', err);
      alert("Failed to shorten URL. Make sure the backend is running.");
    }
  };

  return (
    <div className="App">
      <h1>🔗 URL Shortener</h1>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter long URL here"
      />
      <button onClick={handleShorten}>Shorten URL</button>

      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
