import {
  SET_FILMS_LIST,
  SET_MATCHED_FILMS,
  IS_LOADING,
  LOADING_COVER_IMAGES
} from '../types/index';
import Films from '../../services/Films';

export const getFilms = () => {
  return async dispatch => {
    try {
      const response = await Films.getFilms();
      await dispatch(setFilmsList(response.data));
      await dispatch(getFilmsImages(response.data));
      await dispatch(isLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFilmsImages = filmsList => {
  return async dispatch => {
    const filmsListWithImages = [];

    await filmsList.map(async film => {
      const filmImageUrl = await Films.getFilmsCoverImages(film.title);
      film.coverImage = filmImageUrl[0].url;
      filmsListWithImages.push(film);

      if (filmsListWithImages.length === filmsList.length) {
        dispatch(loadingCoverImages(false));
        dispatch(setFilmsList(filmsListWithImages));
      }
    });
  };
};

const loadingCoverImages = state => ({
  type: LOADING_COVER_IMAGES,
  payload: state
});

export const searchFilm = (filmsList, inputValue) => {
  return async dispatch => {
    await dispatch(isLoading(true));

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

export const setFilmsList = filmsList => ({
  type: SET_FILMS_LIST,
  payload: filmsList
});

export const setMatchedFilms = matchedFilmsList => ({
  type: SET_MATCHED_FILMS,
  payload: matchedFilmsList
});

export const isLoading = state => ({
  type: IS_LOADING,
  payload: state
});
