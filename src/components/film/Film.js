import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Film.css';

class Film extends PureComponent {
  splitEvery = indexToSplit => {
    const { filmsList } = this.props;
    return filmsList.reduce((result, item, index) => {
      if (index % indexToSplit === 0) {
        result.push([]);
      }

      result[Math.floor(index / indexToSplit)].push(item);
      return result;
    }, []);
  };

  renderFilms = () =>
    this.splitEvery(3).map(filmsChunk => (
      <div className="columns is-full-mobile">
        {filmsChunk.map(film => (
          <article className="column article-container">
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

  render = () => {
    return (
      <section className="section is-mobile">{this.renderFilms()}</section>
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
