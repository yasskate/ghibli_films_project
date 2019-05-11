import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configureMockstore from 'redux-mock-store';
import { filmsListMockResponse } from '../../utils/mocks/films_mocks';
import { getFilms, setFilmsList, searchFilm, isLoading } from '../../src/state/actions';

describe('Films actions', () => {
  let mockApi;
  let createMockStore;
  let store;
  const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

  beforeEach(() => {
    mockApi = new MockAdapter(axios);
    createMockStore = configureMockstore([thunk]);
  });

  it('dispatch an action to set films list', () => {
    const expectedResult = {
      type: 'SET_FILMS_LIST',
      payload: filmsListMockResponse
    };

    expect(setFilmsList(filmsListMockResponse)).toEqual(expectedResult);
  });

  it('dispatch an action in order to turn the loader on', () => {
    const expectedResult = {
      type: 'IS_LOADING',
      payload: true
    };

    expect(isLoading(true)).toEqual(expectedResult);
  });

  it('dispatch an action in order to turn the loader off', () => {
    const expectedResult = {
      type: 'IS_LOADING',
      payload: false
    };

    expect(isLoading(false)).toEqual(expectedResult);
  });

  it('dispatch an async function in order to get films from the API', () => {
    store = createMockStore({});
    mockApi.onGet(BASE_URL).reply(200, filmsListMockResponse);

    const expectedResult = [
      {
        type: 'SET_FILMS_LIST',
        payload: filmsListMockResponse
      },
      { type: 'IS_LOADING', payload: false }
    ];

    return store.dispatch(getFilms()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('dispatch an action in order to search films by title', () => {
    store = createMockStore({});
    const title = 'grave';
    const expectedResult = [
      { type: 'IS_LOADING', payload: true },
      {
        type: 'SET_MATCHED_FILMS',
        payload: [filmsListMockResponse[1]]
      },
      { type: 'IS_LOADING', payload: false }
    ];

    return store.dispatch(searchFilm(filmsListMockResponse, title)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('dispatch an action in order to search films by director', () => {
    store = createMockStore({});
    const director = 'toru';
    const expectedResult = [
      { type: 'IS_LOADING', payload: true },
      {
        type: 'SET_MATCHED_FILMS',
        payload: [filmsListMockResponse[1]]
      },
      { type: 'IS_LOADING', payload: false }
    ];

    return store.dispatch(searchFilm(filmsListMockResponse, director)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('dispatch an action in order to search films by producer', () => {
    store = createMockStore({});
    const producer = 'toshio';
    const expectedResult = [
      { type: 'IS_LOADING', payload: true },
      {
        type: 'SET_MATCHED_FILMS',
        payload: [filmsListMockResponse[3]]
      },
      { type: 'IS_LOADING', payload: false }
    ];

    return store.dispatch(searchFilm(filmsListMockResponse, producer)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('dispatch an action in order to search films by release yeaar', () => {
    store = createMockStore({});
    const year = '1986';
    const expectedResult = [
      { type: 'IS_LOADING', payload: true },
      {
        type: 'SET_MATCHED_FILMS',
        payload: [filmsListMockResponse[0]]
      },
      { type: 'IS_LOADING', payload: false }
    ];

    return store.dispatch(searchFilm(filmsListMockResponse, year)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });
});
