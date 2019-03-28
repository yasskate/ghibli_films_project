import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header-container">
      <header className="main-header">
        <div className="main-header-content">
          <img
            className="img-header"
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/1280px-Studio_Ghibli_logo.svg.png"
            alt=""
          />
        </div>
      </header>
    </div>
  );
};
