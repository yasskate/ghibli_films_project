const INITIAL_STATE = {
  isLoading: true,
  filmsList: undefined,
  matchedFilms: undefined
};

const executeIfFunction = f => (typeof f === 'function' ? f() : f);

export const switchcase = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase;

export const switchcaseF = cases => defaultCase => key =>
  executeIfFunction(switchcase(cases)(defaultCase)(key));

export default (state = INITIAL_STATE, action) =>
  switchcaseF({
    SET_FILMS_LIST: () => ({ ...state, filmsList: action.payload }),
    SET_MATCHED_FILMS: () => ({ ...state, matchedFilms: action.payload }),
    IS_LOADING: () => ({ ...state, isLoading: action.payload }),
    default: () => ({ ...state })
  })(state)(action.type);
