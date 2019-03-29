import React from 'react';

export const SearchBar = () => {
  return (
    <section className="section">
      <div className="columns is-marginless">
        <div className="column is-half is-offset-3 is-multiline">
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Search Films"
            />
            <span className="icon is-medium is-left">
              <i className="fas fa-search" />
            </span>
            <span className="icon is-medium is-right">
              <i className="fas fa-film" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* 
  * input value on search bar
  * get value from the input
  * dispatch an action SEARCH_FILM
  * filter value between filmsList
  * create a new state filteredFilmsList=[]
  * dispatch action SET_MATCHED_FILMS if there are matched films
  * save filteredFilmsList if SET_MATCHED_FILMS was dispatched
  * render filteredFilmsList instead of FilmsList
*/
