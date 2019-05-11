import filmsReducer from '../../src/state/reducers/films_reducer';

describe('Films reducer', () => {
  const initialState = {
    isLoading: true,
    filmsList: undefined,
    matchedFilms: undefined
  };

  it('initializes the initial state correctly', () => {
    expect(filmsReducer(undefined, {})).toEqual(initialState);
  });

  it('sets films list data', () => {
    const expectedResult = {
      ...initialState,
      filmsList: 'test'
    };
    expect(
      filmsReducer(undefined, { type: 'SET_FILMS_LIST', payload: 'test' })
    ).toEqual(expectedResult);
  });

  it('updates matched films list data', () => {
    const expectedResult = {
      ...initialState,
      matchedFilms: 'test'
    };
    expect(
      filmsReducer(undefined, { type: 'SET_MATCHED_FILMS', payload: 'test' })
    ).toEqual(expectedResult);
  });

  it('updates "isLoading" state to false', () => {
    const expectedResult = {
      ...initialState,
      isLoading: false
    };
    expect(
      filmsReducer(undefined, { type: 'IS_LOADING', payload: false })
    ).toEqual(expectedResult);
  });

  it('updates "isLoading" state to true', () => {
    const expectedResult = {
      ...initialState,
      isLoading: true
    };
    expect(
      filmsReducer(undefined, { type: 'IS_LOADING', payload: true })
    ).toEqual(expectedResult);
  });

  it('returns the default state', () => {
    const expectedResult = {
      ...initialState
    };
    expect(filmsReducer(undefined, { type: 'default', payload: {} })).toEqual(
      expectedResult
    );
  });
});
