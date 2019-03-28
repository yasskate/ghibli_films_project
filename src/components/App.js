import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../state/actions/index';
import Film from './film/Film';
import { Loader } from './loader/Loader';
import { Header } from './header/Header';
import './App.css';

class App extends PureComponent {
  renderFilms = () => {
    if (this.props.filmsList) {
      return <Film />;
    }

    this.props.getFilms();
    return <Loader />;
  };

  render = () => {
    return (
      <div className="main">
        <Header />
        <div className="container">{this.renderFilms()}</div>
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

const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => dispatch(getFilms())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
