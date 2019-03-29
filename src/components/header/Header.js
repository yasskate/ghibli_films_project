import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="is-full">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <img
              className="img-header"
              src="https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/1280px-Studio_Ghibli_logo.svg.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
