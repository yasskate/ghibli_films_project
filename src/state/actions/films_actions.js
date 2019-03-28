import { SET_FILMS_LIST } from '../types/index';
import Films from '../../services/Films';

export const getFilms = () => {
  return async dispatch => {
    try {
      const response = await Films.getFilms();
      dispatch(setFilmsList(response.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const setFilmsList = filmsList => ({
  type: SET_FILMS_LIST,
  payload: filmsList
})
