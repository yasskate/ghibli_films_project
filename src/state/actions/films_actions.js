import { SET_FILMS_LIST, SET_MATCHED_FILMS, IS_LOADING } from '../types/index';
import Films from '../../services/Films';

export const getFilms = () => {
  return async dispatch => {
    try {
      const response = await Films.getFilms();
      await dispatch(setFilmsList(response.data));
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

    const matchedFilms = filmsList.filter(
      film =>
        film.title.toLocaleLowerCase().includes(inputValue) ||
        film.director.toLocaleLowerCase().includes(inputValue) ||
        film.producer.toLocaleLowerCase().includes(inputValue) ||
        film.release_date.toLocaleLowerCase().includes(inputValue)
    );

    await dispatch(setMatchedFilms(matchedFilms));
    await dispatch(isLoading(false));
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
