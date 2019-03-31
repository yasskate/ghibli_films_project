import { SET_FILMS_LIST, SET_MATCHED_FILMS, IS_LOADING } from '../types/index';
import Films from '../../services/Films';

export const getFilms = () => {
  return async dispatch => {
    try {
      const response = await Films.getFilms();
      dispatch(setFilmsList(response.data));
      dispatch(isLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFilmsList = filmsList => ({
  type: SET_FILMS_LIST,
  payload: filmsList
});

export const searchFilm = (filmsList, inputValue) => {
  return async dispatch => {
    dispatch(isLoading(true));
    const matchedFilms = filmsList.filter(film =>
      film.title.toLocaleLowerCase().includes(inputValue)
    );

    dispatch(setMatchedFilms(matchedFilms));
  };
};

export const setMatchedFilms = matchedFilmsList => ({
  type: SET_MATCHED_FILMS,
  payload: matchedFilmsList
});

export const isLoading = state => ({
  type: IS_LOADING,
  payload: state
});
