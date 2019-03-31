import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Films.css';

class Films extends PureComponent {
  state = {
    filmsArray: []
  };

  componentDidMount = () => {
    const { matchedFilms, filmsList } = this.props;
    this.setState({
      filmsArray: matchedFilms ? matchedFilms : filmsList
    });
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

  renderNoCoincidencesMessage = () => {
    return (
      <div className="loader-container">
        <img src="https://i.imgur.com/h5zBDCH.gif"
        alt="Totoro didn't find films"
        />
        <h1 className="title">There are no matched films</h1>
      </div>
    );
  }

  renderFilmsChunks = () =>
    this.splitFilms(3).map(filmsChunk => (
      <div className="columns is-full-mobile">
        {filmsChunk.map(film => (
          <article className="column article-container is-one-third">
            <div className="film-container message is-primary">
              <div className="message-header">
                <h3 className="has-text-weight-bold is-size-3">{film.title}</h3>
                <p>({film.release_date})</p>
              </div>
              <div className="film-details-container message-doby">
                <h2>Director: {film.director}</h2>
                <h2>Producer: {film.producer}</h2>
                <p className="film-description">{film.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    ));

  renderFilms = () => {
    if (this.state.filmsArray.length > 0) {
      return this.renderFilmsChunks();
    }

    return this.renderNoCoincidencesMessage();
  };

  render = () => {
    return (
      <section className="section is-mobile">{this.renderFilms()}</section>
    );
  };
}

const mapStateToProps = state => {
  const {
    films: { filmsList, matchedFilms }
  } = state;

  return {
    filmsList,
    matchedFilms
  };
};

export default connect(mapStateToProps)(Films);
