import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../state/actions/index';
import Film, { Loader, Header, SearchBar } from './index';

class App extends PureComponent {
  renderFilmComponent = () => {
    if (this.props.filmsList) {
      return <Film />;
    }

    this.props.getFilms();
    return <Loader />;
  };

  render = () => {
    return (
      <div className="container-fluid is-full">
        <Header />
        <SearchBar />
        {this.renderFilmComponent()}
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
