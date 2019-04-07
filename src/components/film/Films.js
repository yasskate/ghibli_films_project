import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Films.css';

class Films extends PureComponent {
  static defaultProps = {
    isLoading: true
  };

  state = {
    filmsArray: [],
    keyCounter: 1
  };

  componentDidMount = () => {
    const { matchedFilms, filmsList, isLoading } = this.props;

    if (!isLoading) {
      this.setState({
        filmsArray: matchedFilms ? matchedFilms : filmsList
      });
    }
  };

  splitFilms = indexToSplit => {
    const { filmsArray } = this.state;

    return filmsArray.reduce((result, item, index) => {
      if (index % indexToSplit === 0) {
        result.push([]);
      }

      result[Math.floor(index / indexToSplit)].push(item);
      return result;
    }, []);
  };

  renderNoCoincidencesMessage = () => (
    <div className="loader-container">
      <img
        src="https://i.imgur.com/h5zBDCH.gif"
        alt="Totoro didn't find films"
      />
      <h1 className="title">There are no matched films</h1>
    </div>
  );

  getFilmHeader = film => (
    <div className="message-header">
      <h3 className="has-text-weight-bold is-size-3">{film.title}</h3>
      <p>({film.release_date})</p>
    </div>
  );

  getFilmContent = film => (
    <div className="film-details-container message-body">
      <h2>
        <strong>Director:</strong> {film.director}
      </h2>
      <h2>
        <strong>Producer:</strong> {film.producer}
      </h2>
      <p className="film-description content">{film.description}</p>
    </div>
  );

  renderFilmCard = film => (
    <article key={film.id} className="column article-container is-one-third">
      <div className="film-container message is-primary">
        {this.getFilmHeader(film)}
        {this.getFilmContent(film)}
      </div>
    </article>
  );

  renderFilmsChunks = () =>
    this.splitFilms(3).map(filmsChunk => (
      <div key={filmsChunk[0].id} className="columns is-full-mobile">
        {filmsChunk.map(film => this.renderFilmCard(film))}
      </div>
    ));

  renderFilms = () => {
    const { filmsArray } = this.state;

    if (filmsArray.length === 0) {
      return this.renderNoCoincidencesMessage();
    }

    return this.renderFilmsChunks();
  };

  render = () => {
    return (
      <section className="section is-mobile">{this.renderFilms()}</section>
    );
  };
}

const mapStateToProps = state => {
  const {
    films: { filmsList, matchedFilms, isLoading }
  } = state;

  return {
    filmsList,
    matchedFilms,
    isLoading
  };
};

export default connect(mapStateToProps)(Films);
