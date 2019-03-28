import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../state/actions/index';
import { loader as Loader } from './loader/Loader';
import './App.css';

class App extends PureComponent {
  renderFilms = () => {
    if (this.props.filmsList) {
      return <h1>React App</h1>;
    }

    this.props.getFilms();
    return <Loader />;
  };

  render = () => {
    return (
      <div className="App">
        <header class="main-header">
          <div class="main-header-content">
            <h1>Ghibli Films</h1>
          </div>
        </header>
        {this.renderFilms()}
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
