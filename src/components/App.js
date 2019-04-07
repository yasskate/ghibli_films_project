import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../state/actions/index';
import { Films, Loader, Header, SearchBar } from './index';

export class App extends PureComponent {
  static defaultProps = {
    isLoading: true
  };

  componentDidMount = () => {
    this.props.getFilms();
  };

  renderFilmComponent = () => {
    const { isLoading } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return <Films />;
  };

  render = () => {
    const { filmsList } = this.props;
    return (
      <div className="container-fluid is-full">
        <Header />
        <SearchBar filmsList={filmsList} />
        {this.renderFilmComponent()}
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { filmsList, isLoading } = state.films;

  return {
    filmsList,
    isLoading
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
