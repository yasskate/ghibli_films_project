import React from 'react';
import './Loader.css';

export const Loader = () => (
  <div className="loader-container">
    <img
      src="https://i.imgur.com/h5PA99R.gif"
      alt="Totoro is loading the data..."
    />
    <h1>Loading...</h1>
  </div>
);
