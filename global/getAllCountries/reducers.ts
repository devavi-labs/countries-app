import {
  GetAllCountriesActionType,
  GetAllCountriesState,
  GET_ALL_COUNTRIES_FAILED,
  GET_ALL_COUNTRIES_FINISHED,
  GET_ALL_COUNTRIES_REQUESTED,
} from "./types";

const initialState: GetAllCountriesState = {
  countries: [],
  fetching: false,
};

export const getAllCountriesReducer = (
  state = initialState,
  action: GetAllCountriesActionType
): GetAllCountriesState => {
  switch (action.type) {
    case GET_ALL_COUNTRIES_REQUESTED:
      return {
        ...state,
        fetching: true,
      };
    case GET_ALL_COUNTRIES_FINISHED:
      return {
        countries: action.payload,
        fetching: false,
        error: null,
      };
    case GET_ALL_COUNTRIES_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
