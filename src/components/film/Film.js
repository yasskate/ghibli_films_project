import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Film.css';

class Film extends PureComponent {
  render = () => {
    return (
      <div className="film-container">
        <div className="film-details-container">
          <h1>Castle in the Sky</h1>
          <h3>(1999)</h3>
          <h2>Director: Hayao Miyazaki</h2>
          <h2>Productor: Isao Takahata</h2>
          <p>
            Nisi est veniam ipsum nisi incididunt pariatur labore magna fugiat.
            Sit nisi elit cupidatat ea velit consectetur esse id dolor.
            Excepteur amet aliquip velit ullamco aute. Adipisicing ad cillum
            laborum nisi cupidatat ex nostrud officia qui incididunt tempor in
            in id. Do occaecat enim aliquip anim aliquip consequat aute magna.
          </p>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  const {
    films: { filmsList }
  } = state;

  return {
    filmsList
  };
};

export default connect(mapStateToProps)(Film);
