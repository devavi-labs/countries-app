import {
  SearchCountriesActionType,
  SearchCountriesState,
  SEARCH_COUNTRIES_FAILED,
  SEARCH_COUNTRIES_FINISHED,
  SEARCH_COUNTRIES_REQUESTED,
} from "./types";

const initialState: SearchCountriesState = {
  countries: [],
  fetching: false,
};

export const searchCountriesReducer = (
  state = initialState,
  action: SearchCountriesActionType
): SearchCountriesState => {
  switch (action.type) {
    case SEARCH_COUNTRIES_REQUESTED:
      return {
        ...state,
        query: action.query,
        fetching: true,
      };
    case SEARCH_COUNTRIES_FINISHED:
      return {
        ...state,
        countries: action.payload,
        fetching: false,
        error: null,
      };
    case SEARCH_COUNTRIES_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
